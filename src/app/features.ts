import { Feature } from "@/models/ui/feature";
import { Coins, RouteOff, SignpostBig } from "lucide-react";

export const FEATURES: Feature[] = [
  {
    Icon: RouteOff,
    title: "Easy",
    description: "Build. Export. Done.",
  },
  {
    Icon: Coins,
    title: "Straightforward",
    description: "Pay once or pay as needed. No complicated pricing plans.",
  },
  {
    Icon: SignpostBig,
    title: "Direct",
    description: "You just want to build a CV. Nothing more, nothing less.",
  },
];
