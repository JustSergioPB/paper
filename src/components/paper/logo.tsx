import { cn } from "@/lib/utils";
import { Origami } from "lucide-react";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <span className={cn(className, "flex items-center gap-2")}>
      <Origami />
      <span className="text-xl font-regular">Paper</span>
    </span>
  );
}
