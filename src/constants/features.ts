import { Feature } from "@/models/ui/feature";
import { Coins, FileHeart, SignpostBig } from "lucide-react";

export const FEATURES: Feature[] = [
  {
    Icon: FileHeart,
    title: "features.items.easy.title",
    description: "features.items.easy.description",
  },
  {
    Icon: Coins,
    title: "features.items.straightforward.title",
    description: "features.items.straightforward.description",
  },
  {
    Icon: SignpostBig,
    title: "features.items.direct.title",
    description: "features.items.direct.description",
  },
];
