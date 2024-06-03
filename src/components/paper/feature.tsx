import { cn } from "@/lib/utils";
import { Feature as FeatureModel } from "@/models/ui/feature";

type Props = {
  className?: string;
  feature: FeatureModel;
};

export default function Feature({
  feature: { Icon, title, description },
  className,
}: Props) {
  return (
    <li className={cn(className)}>
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-2 flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-900 dark:text-slate-50" />
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {description}
      </p>
    </li>
  );
}
