import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy route. Agents used to be referral partners earning a share of every
 * unlock; that model is gone — recruitment agencies are now AgencyOS subscribers.
 * Kept as a permanent redirect so old links and shared URLs still land somewhere.
 */
export const Route = createFileRoute("/agents")({
  beforeLoad: () => {
    throw redirect({ to: "/agencies", statusCode: 301 });
  },
});
