import { ReactNode } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckIcon, X } from "lucide-react";
import { Pricing } from "@/models/ui/pricing";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  pricing: Pricing;
};

export default function PricingCard({
  className,
  pricing: {
    plan,
    price,
    currency,
    period,
    features,
    button,
    Icon,
    description,
  },
}: Props) {
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardHeader>
        <CardTitle>
          <Badge variant="secondary">{plan}</Badge>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grow shrink-0 basis-auto">
        <div className="flex items-baseline mb-8 mt-2">
          <span className="text-4xl font-bold">
            {currency}
            {price}
          </span>
          <span className="ml-1 text-sm font-medium text-slate-500 dark:text-slate-400">
            {period}
          </span>
        </div>
        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.included ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4 fill-primary" />
              )}
              {item.name}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button>
          <Icon className="mr-2 h-4 w-4" />
          {button}
        </Button>
      </CardFooter>
    </Card>
  );
}
