import { Route } from "@/models/ui/route";
import { TFunction } from "i18next";
import Link from "next/link";

type Props = {
  routes: Route[];
  t: TFunction<any, any>;
};

export default function Navbar({ routes, t }: Props) {
  return (
    <nav>
      <ul className="flex gap-4">
        {routes.map((route) => (
          <li key={route.title}>
            <Link
              className="text-sm hover:underline hover:text-primary"
              href={route.href}
            >
              {t(route.title)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
