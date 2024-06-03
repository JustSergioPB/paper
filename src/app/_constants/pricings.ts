import { Pricing } from "@/models/ui/pricing";
import { BookCopy, Coins, Printer } from "lucide-react";

export const PRICINGS: Pricing[] = [
  {
    plan: "Sheet",
    description:
      "Hey you! Yes, you! The lightweight user who just needs a template to handle things fast. This is for you.",
    price: 2,
    currency: "€",
    period: "per sheet",
    features: [
      {
        name: "Export unlimited times",
        included: true,
      },
      {
        name: "Unlimited CVs",
        included: false,
      },
      {
        name: "Cloud storage",
        included: false,
      },
    ],
    button: "Buy prints",
    Icon: Printer,
  },
  {
    plan: "Document",
    description:
      "Ideal for those who need to handle multiple documents, want to save time and access them anywhere.",
    price: 5,
    currency: "€",
    period: "per document",
    features: [
      {
        name: "Export unlimited times",
        included: true,
      },
      {
        name: "Unlimited CVs",
        included: false,
      },
      {
        name: "Cloud storage",
        included: true,
      },
    ],
    button: "Buy documents",
    Icon: Coins,
  },
  {
    plan: "Library",
    description:
      "If you are a heavy lifter when it comes to paperwork, this is the plan for you.",
    price: 200,
    currency: "€",
    period: "once",
    features: [
      {
        name: "Export unlimited times",
        included: true,
      },
      {
        name: "Unlimited CVs",
        included: true,
      },
      {
        name: "Cloud storage",
        included: true,
      },
    ],
    button: "Buy library",
    Icon: BookCopy,
  },
];
