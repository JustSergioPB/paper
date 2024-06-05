import { LucideIcon } from "lucide-react";

export type PricingPlan = "sheet" | "document" | "library";

export type Pricing = {
  plan: PricingPlan;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  button: string;
  features: {
    included: boolean;
    name: string;
  }[];
  Icon: LucideIcon;
};
