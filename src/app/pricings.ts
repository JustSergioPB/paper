import { Pricing } from "@/models/ui/pricing";
import { BookCopy, Coins, Printer } from "lucide-react";

export const PRICINGS: Pricing[] = [
  {
    plan: "Print",
    description:
      "Ideal for those who need to print their CVs and want to save on ink.",
    price: 5,
    currency: "€",
    period: "per document",
    features: [
      {
        name: "Export to PDF unlimited times",
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
      "Ideal for those who need to update their CVs from time to time and want to have a saved copy.",
    price: 10,
    currency: "€",
    period: "per document",
    features: [
      {
        name: "Export to PDF unlimited times",
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
      "If you are a professional and need to manage your CV frequently, this is the plan for you.",
    price: 100,
    currency: "€",
    period: "once",
    features: [
      {
        name: "Export to PDF unlimited times",
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
