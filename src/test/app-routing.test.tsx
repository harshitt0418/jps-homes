import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import {
  getAllGroups,
  getAllProjects,
  getGroupBySlug,
  getProjectBySlug,
  getProjectsByGroup,
} from "@/data/projects";
import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/");
  });

  it("matches a page for /admin", () => {
    const matches = router.matchRoutes("/admin");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/admin");
  });

  it("matches a page for /about", () => {
    const matches = router.matchRoutes("/about");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/about");
  });

  it("matches a page for /projects", () => {
    const matches = router.matchRoutes("/projects");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/");
  });

  it("matches group route for /projects/rishita-developers", () => {
    const matches = router.matchRoutes("/projects/rishita-developers");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/$groupSlug/");
  });

  it("matches project detail route for /projects/rishita-developers/rishita-mulberry-heights", () => {
    const matches = router.matchRoutes("/projects/rishita-developers/rishita-mulberry-heights");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/$groupSlug/$projectSlug");
  });

  it("matches project detail route for /projects/omaxe/omaxe-metro-city", () => {
    const matches = router.matchRoutes("/projects/omaxe/omaxe-metro-city");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/$groupSlug/$projectSlug");
  });

  it("matches project detail route for /projects/pintail/pintail-park-city", () => {
    const matches = router.matchRoutes("/projects/pintail/pintail-park-city");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/$groupSlug/$projectSlug");
  });

  it("matches project detail route for /projects/migsun-group/migsun-lucknow-central", () => {
    const matches = router.matchRoutes("/projects/migsun-group/migsun-lucknow-central");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.routeId).toBe("/projects/$groupSlug/$projectSlug");
  });
});

describe("Local Project Data Source", () => {
  it("contains all required official developer groups", () => {
    const groups = getAllGroups();
    const groupSlugs = groups.map((g) => g.slug);

    expect(groupSlugs).toContain("rishita-developers");
    expect(groupSlugs).toContain("omaxe");
    expect(groupSlugs).toContain("pintail");
    expect(groupSlugs).toContain("emaar-india");
    expect(groupSlugs).toContain("migsun-group");
    expect(groupSlugs).toContain("ansal-api");
  });

  it("retrieves group by slug", () => {
    const rishita = getGroupBySlug("rishita-developers");
    expect(rishita).toBeDefined();
    expect(rishita?.name).toBe("Rishita Developers");
  });

  it("retrieves projects under a group", () => {
    const omaxeProjects = getProjectsByGroup("omaxe");
    expect(omaxeProjects.length).toBeGreaterThanOrEqual(2);
  });

  it("retrieves verified project by slug", () => {
    const project = getProjectBySlug("rishita-developers", "rishita-mulberry-heights");
    expect(project).toBeDefined();
    expect(project?.name).toBe("Rishita Mulberry Heights");
    expect(project?.rera).toContain("UPRERAPRJ357829");
    expect(project?.heroImage.url).toMatch(/^\/assets\/projects\//);
    expect(project?.lastVerified).toBe("2026-10-18");
  });
});
