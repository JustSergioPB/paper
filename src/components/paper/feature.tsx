import { Feature as FeatureModel } from "@/models/ui/feature";

export default function Feature({ title, description, Icon }: FeatureModel) {
  return (
    <li className="flex items-center gap-2">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-2 flex items-center justify-center">
        <Icon className="w-5 h-5 text-slate-900 dark:text-slate-50" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {description}
        </p>
      </div>
    </li>
  );
}
