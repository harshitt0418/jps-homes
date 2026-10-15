import { createServerFn } from "@tanstack/react-start";
import { getSession, useSession } from "@tanstack/react-start/server";
import { z } from "zod";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  interest: string;
  message?: string;
  createdAt: string;
  source: "hero" | "contact";
};

type DatabaseLead = {
  id: string;
  name: string;
  phone: string;
  interest: string;
  message: string | null;
  source: Lead["source"];
  created_at: string;
};

const sessionName = "jps_admin";

function getRequiredEnv(
  name: "SUPABASE_URL" | "SUPABASE_SERVICE_ROLE_KEY" | "ADMIN_PASSWORD" | "ADMIN_SESSION_SECRET",
) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server environment variable: ${name}`);
  return value;
}

function sessionConfig() {
  return {
    name: sessionName,
    password: getRequiredEnv("ADMIN_SESSION_SECRET"),
    maxAge: 60 * 60 * 24 * 7,
    cookie: {
      httpOnly: true,
      path: "/",
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
    },
  };
}

async function requireAdmin() {
  const session = await getSession<{ isAdmin?: boolean }>(sessionConfig());
  if (session.data.isAdmin !== true) throw new Error("Unauthorized");
}

async function supabase(path: string, init?: RequestInit): Promise<Response> {
  const url = getRequiredEnv("SUPABASE_URL").replace(/\/$/, "");
  const serviceKey = getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const headers = new Headers(init?.headers);
  headers.set("apikey", serviceKey);
  headers.set("authorization", `Bearer ${serviceKey}`);
  headers.set("content-type", "application/json");
  headers.set("prefer", "return=representation");

  const response = await fetch(`${url}/rest/v1/${path}`, { ...init, headers });
  if (!response.ok) {
    const detail = await response.text();
    console.error("Supabase lead request failed", response.status, detail);
    throw new Error("Could not complete the request. Please try again.");
  }
  return response;
}

function toLead(row: DatabaseLead): Lead {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    interest: row.interest,
    message: row.message ?? undefined,
    source: row.source,
    createdAt: row.created_at,
  };
}

function normaliseIndianPhone(phone: string): string {
  return phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
}

const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .max(24)
    .refine((value) => /^[6-9]\d{9}$/.test(normaliseIndianPhone(value)), {
      message: "Enter a valid 10-digit Indian mobile number",
    })
    .transform(normaliseIndianPhone),
  interest: z.enum(["Buying a home", "Selling a property", "Investing in plots", "Renting"]),
  message: z
    .string()
    .trim()
    .max(1000)
    .optional()
    .transform((value) => value || undefined),
  source: z.enum(["hero", "contact"]),
});

export const submitLead = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const response = await supabase("leads", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        interest: data.interest,
        message: data.message ?? null,
        source: data.source,
      }),
    });
    const rows = (await response.json()) as DatabaseLead[];
    const lead = rows[0];
    if (!lead) throw new Error("Enquiry could not be saved.");
    return toLead(lead);
  });

export const loginAdmin = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ password: z.string().min(1).max(200) }).parse(input))
  .handler(async ({ data }) => {
    if (data.password !== getRequiredEnv("ADMIN_PASSWORD")) throw new Error("Incorrect password");
    const session = await useSession<{ isAdmin?: boolean }>(sessionConfig());
    await session.update({ isAdmin: true });
    return { ok: true };
  });

export const checkAdminSession = createServerFn({ method: "GET" }).handler(async () => {
  const session = await getSession<{ isAdmin?: boolean }>(sessionConfig());
  return session.data.isAdmin === true;
});

export const listLeads = createServerFn({ method: "GET" }).handler(async () => {
  await requireAdmin();
  const response = await supabase(
    "leads?select=id,name,phone,interest,message,source,created_at&order=created_at.desc",
  );
  const rows = (await response.json()) as DatabaseLead[];
  return rows.map(toLead);
});

const leadIdSchema = z.object({ id: z.string().uuid() });

export const deleteLead = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadIdSchema.parse(input))
  .handler(async ({ data }) => {
    await requireAdmin();
    await supabase(`leads?id=eq.${encodeURIComponent(data.id)}`, { method: "DELETE" });
    return { ok: true };
  });

export const clearLeads = createServerFn({ method: "POST" }).handler(async () => {
  await requireAdmin();
  await supabase("leads?id=not.is.null", { method: "DELETE" });
  return { ok: true };
});
