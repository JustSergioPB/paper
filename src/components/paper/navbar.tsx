import { cn } from "@/lib/utils";
import { Route } from "@/models/ui/route";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  routes: Route[];
};

export default function Navbar({ routes }: Props) {
  return (
    <nav>
      <ul className="flex gap-4">
        {routes.map((route) => (
          <li key={route.title}>
            <Link
              className="text-sm hover:underline hover:text-primary"
              href={route.href}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
