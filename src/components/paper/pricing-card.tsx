import { Button, buttonVariants } from "../ui/button";
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
import { TFunction } from "i18next";
import Link from "next/link";
import { CHECKOUT_ROUTE } from "@/constants/routes";

type Props = {
  className?: string;
  pricing: Pricing;
  t: TFunction<any, any>;
};

export default function PricingCard({
  className,
  pricing: {
    name,
    plan,
    price,
    currency,
    period,
    features,
    button,
    Icon,
    description,
  },
  t,
}: Props) {
  return (
    <Card className={cn(className, "flex flex-col")}>
      <CardHeader>
        <CardTitle>
          <Badge variant="secondary">{t(name)}</Badge>
        </CardTitle>
        <CardDescription>{t(description)}</CardDescription>
      </CardHeader>
      <CardContent className="grow shrink-0 basis-auto">
        <div className="flex items-baseline mb-8 mt-2">
          <span className="text-4xl font-bold">
            {t(currency)}
            {price}
          </span>
          <span className="ml-1 text-sm font-medium">{t(period)}</span>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.included ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4 fill-primary" />
              )}
              {t(item.name)}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link
          href={`${CHECKOUT_ROUTE}?plan=${plan}`}
          className={buttonVariants()}
        >
          {t(button)}
        </Link>
      </CardFooter>
    </Card>
  );
}
