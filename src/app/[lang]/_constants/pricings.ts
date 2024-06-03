import { Pricing } from "@/models/ui/pricing";
import { BookCopy, Coins, Printer } from "lucide-react";

export const PRICINGS: Pricing[] = [
  {
    plan: "pricing.items.sheet.title",
    description: "pricing.items.sheet.description",
    price: 2,
    currency: "pricing.items.sheet.currency",
    period: "pricing.items.sheet.period",
    features: [
      {
        name: "pricing.features.unlimitedExports",
        included: true,
      },
      {
        name: "pricing.features.unlimitedDocuments",
        included: false,
      },
      {
        name: "pricing.features.cloudStorage",
        included: false,
      },
    ],
    button: "pricing.items.sheet.button",
    Icon: Printer,
  },
  {
    plan: "pricing.items.document.title",
    description: "pricing.items.document.description",
    price: 5,
    currency: "pricing.items.document.currency",
    period: "pricing.items.document.period",
    features: [
      {
        name: "pricing.features.unlimitedExports",
        included: true,
      },
      {
        name: "pricing.features.unlimitedDocuments",
        included: false,
      },
      {
        name: "pricing.features.cloudStorage",
        included: true,
      },
    ],
    button: "pricing.items.document.button",
    Icon: Coins,
  },
  {
    plan: "pricing.items.library.title",
    description: "pricing.items.library.description",
    price: 200,
    currency: "pricing.items.library.currency",
    period: "pricing.items.library.period",
    features: [
      {
        name: "pricing.features.unlimitedExports",
        included: true,
      },
      {
        name: "pricing.features.unlimitedDocuments",
        included: true,
      },
      {
        name: "pricing.features.cloudStorage",
        included: true,
      },
    ],
    button: "pricing.items.library.button",
    Icon: BookCopy,
  },
];
