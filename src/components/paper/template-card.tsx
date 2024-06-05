import { cn } from "@/lib/utils";
import { Template } from "@/models/ui/template";
import { TFunction } from "i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Eye, Files, Icon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { APP_ROUTE } from "@/constants/routes";

type Props = {
  className?: string;
  template: Template;
  t: TFunction<any, any>;
};

export default function TemplateCard({
  className,
  template: {
    name,
    description,
    Icon,
    button,
    creator,
    href,
    visualizations,
    usages,
  },
  t,
}: Props) {
  function formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return value.toString();
    }
  }

  return (
    <Card className={cn(className, "flex flex-col hover:cursor-pointer")}>
      <CardHeader>
        <CardTitle>{t(name)}</CardTitle>
        <CardDescription>
          {t("by")} {creator}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow shrink-0 basis-auto flex flex-col">
        <CardDescription className="grow shrink-0 basis-auto">
          {t(description)}
        </CardDescription>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Files className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">
              {formatNumber(usages)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">
              {formatNumber(visualizations)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Link href={`${APP_ROUTE}/${href}`} className={buttonVariants()}>
          <Icon className="mr-2 h-4 w-4"/>
          {t(button)}
        </Link>
      </CardFooter>
    </Card>
  );
}
