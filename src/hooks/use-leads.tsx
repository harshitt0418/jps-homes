import { useCallback, useState } from "react";
import { useServerFn } from "@tanstack/react-start";

import {
  checkAdminSession,
  clearLeads as clearLeadsOnServer,
  deleteLead as deleteLeadOnServer,
  listLeads,
  loginAdmin,
  submitLead,
  type Lead,
} from "@/server/leads";

export type { Lead } from "@/server/leads";

type NewLead = Omit<Lead, "id" | "createdAt">;

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [ready, setReady] = useState(false);
  const submitLeadFn = useServerFn(submitLead);
  const loginAdminFn = useServerFn(loginAdmin);
  const checkAdminSessionFn = useServerFn(checkAdminSession);
  const listLeadsFn = useServerFn(listLeads);
  const deleteLeadFn = useServerFn(deleteLeadOnServer);
  const clearLeadsFn = useServerFn(clearLeadsOnServer);

  const refresh = useCallback(async () => {
    const next = await listLeadsFn();
    setLeads(next);
    setReady(true);
    return next;
  }, [listLeadsFn]);

  const addLead = useCallback(
    async (lead: NewLead) => {
      const newLead = await submitLeadFn({ data: lead });
      setLeads((prev) => [newLead, ...prev]);
      return newLead;
    },
    [submitLeadFn],
  );

  const login = useCallback(
    async (password: string) => {
      await loginAdminFn({ data: { password } });
    },
    [loginAdminFn],
  );

  const isAdmin = useCallback(async () => checkAdminSessionFn(), [checkAdminSessionFn]);

  const deleteLead = useCallback(
    async (id: string) => {
      await deleteLeadFn({ data: { id } });
      setLeads((prev) => prev.filter((lead) => lead.id !== id));
    },
    [deleteLeadFn],
  );

  const clearAll = useCallback(async () => {
    await clearLeadsFn();
    setLeads([]);
  }, [clearLeadsFn]);

  return { leads, addLead, deleteLead, clearAll, refresh, login, isAdmin, ready };
}
