import { cn } from "@/lib/utils";
import { Feature as FeatureModel } from "@/models/ui/feature";
import { TFunction } from "i18next";

type Props = {
  className?: string;
  feature: FeatureModel;
  t: TFunction<any, any>;
};

export default function Feature({
  t,
  feature: { Icon, title, description },
  className,
}: Props) {
  return (
    <li className={cn(className)}>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-2 flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-900 dark:text-slate-50" />
        </div>
        <h3 className="font-medium">{t(title)}</h3>
      </div>
      <p className="text-muted-foreground text-sm">{t(description)}</p>
    </li>
  );
}
