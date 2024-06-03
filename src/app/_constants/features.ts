import { Feature } from "@/models/ui/feature";
import { Coins, FileHeart, SignpostBig } from "lucide-react";

export const FEATURES: Feature[] = [
  {
    Icon: FileHeart,
    title: "Easy",
    description: "Pick a document template. Fill it. Export. Done.",
  },
  {
    Icon: Coins,
    title: "Straightforward",
    description: "Pay once or pay as needed. No complicated pricing plans.",
  },
  {
    Icon: SignpostBig,
    title: "Direct",
    description: "You just want a template for your documents. Nothing more, nothing less.",
  },
];
