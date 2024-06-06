import { Pricing } from "@/models/ui/pricing";
import { BookCopy, Coins, Printer } from "lucide-react";

export const PRICINGS: Pricing[] = [
  {
    name: "pricing.items.sheet.title",
    plan: "sheet",
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
      {
        name: "pricing.features.sharing",
        included: false,
      },
    ],
    button: "pricing.items.sheet.button",
    Icon: Printer,
  },
  {
    name: "pricing.items.document.title",
    plan: "document",
    description: "pricing.items.document.description",
    price: 10,
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
      {
        name: "pricing.features.sharing",
        included: true,
      },
    ],
    button: "pricing.items.document.button",
    Icon: Coins,
  },
  {
    name: "pricing.items.library.title",
    plan: "library",
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
      {
        name: "pricing.features.sharing",
        included: true,
      },
    ],
    button: "pricing.items.library.button",
    Icon: BookCopy,
  },
];
