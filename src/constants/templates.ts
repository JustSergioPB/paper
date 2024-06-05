import { Template } from "@/models/ui/template";
import { BriefcaseBusiness, CircleArrowRight, ReceiptText } from "lucide-react";

export const TEMPLATES: Template[] = [
  {
    name: "templates.items.cv.name",
    creator: "Paper",
    description: "templates.items.cv.description",
    usages: Math.floor(Math.random() * 100000),
    visualizations: Math.floor(Math.random() * 1000000),
    button: "templates.items.cv.button",
    href: "cv",
    Icon: BriefcaseBusiness,
  },
  {
    name: "templates.items.invoice.name",
    creator: "Paper",
    description: "templates.items.invoice.description",
    usages: Math.floor(Math.random() * 100000),
    visualizations: Math.floor(Math.random() * 1000000),
    button: "templates.items.invoice.button",
    href: "invoice",
    Icon: ReceiptText,
  },
  {
    name: "templates.items.resignation.name",
    creator: "Paper",
    description: "templates.items.resignation.description",
    usages: Math.floor(Math.random() * 100000),
    visualizations: Math.floor(Math.random() * 1000000),
    button: "templates.items.resignation.button",
    href: "resignation",
    Icon: CircleArrowRight,
  },
];
