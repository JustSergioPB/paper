import { Route } from "@/models/ui/route";

export const APP_ROUTE = "/templates";
export const CHECKOUT_ROUTE = "/checkout";

export const ROUTES: Route[] = [
  {
    title: "routes.documents",
    href: APP_ROUTE,
  },
  {
    title: "routes.features",
    href: "#features",
  },
  {
    title: "routes.pricing",
    href: "#pricing",
  },
  {
    title: "routes.about",
    href: "#about",
  },
];
