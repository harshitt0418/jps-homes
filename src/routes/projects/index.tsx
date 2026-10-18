import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: () => {
    throw redirect({
      to: "/",
      hash: "featured-collection",
    });
  },
  component: () => null,
});
