import { Button, buttonVariants } from "@/components/ui/button";
import { Coffee, Origami, PencilRuler } from "lucide-react";
import Link from "next/link";
import { FEATURES } from "./_constants/features";
import Feature from "@/components/paper/feature";
import { PRICINGS } from "./_constants/pricings";
import PricingCard from "@/components/paper/pricing-card";
import Navbar from "@/components/paper/navbar";
import { ROUTES } from "./_constants/routes";
import { cn } from "@/lib/utils";
import Logo from "@/components/paper/logo";
import ThemeToggle from "@/components/paper/theme-toggle";
import { useTranslation } from "@/i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "landing-page");
  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth h-screen">
      <header className="flex items-center justify-between px-64 pt-8">
        <Logo />
        <div className="flex items-center gap-4">
          <Navbar routes={ROUTES} t={t} />
          <Button size="sm">{t("access")}</Button>
        </div>
      </header>
      <main className="flex justify-center items-center my-48 px-80">
        <div className="flex flex-col items-center w-2/3">
          <h1 className="text-4xl font-black mb-2">
            {t("welcome")} <span className="text-primary">Paper</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {t("minimalist")}{" "}
            <span className="text-primary">{t("template")}</span>{" "}
            {t("provider")}
          </h2>
          <p className="text-lg font-regular mb-8 text-muted-foreground text-center">
            {t("catchphrase")}
          </p>
          <Link href="/documents" className={cn(buttonVariants())}>
            <PencilRuler className="h-4 w-4 mr-2" />
            {t("cta")}
          </Link>
        </div>
      </main>
      <section className=" flex flex-col items-center justify-cente mb-24 px-80">
        <p className="text-2xl font-semibold mb-2">{t("features.title")}</p>
        <p className="text-lg font-regular text-muted-foreground mb-8">
          {t("features.description")}
        </p>
        <ul className="flex gap-4 items-center mb-8">
          {FEATURES.map((feature, index) => (
            <Feature
              key={index}
              feature={feature}
              t={t}
              className="basis-1/3"
            />
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col items-center justify-center mb-24 px-80"
        id="pricing"
      >
        <h2 className="text-2xl font-semibold mb-2">{t("pricing.title")}</h2>
        <p className="text-lg font-regular text-muted-foreground mb-8">
          {t("pricing.description")}
        </p>
        <div className="flex items-center justify-center gap-4">
          {PRICINGS.map((pricing, index) => (
            <PricingCard
              key={index}
              pricing={pricing}
              className="h-96 w-72"
              t={t}
            />
          ))}
        </div>
      </section>
      <footer className="border-t px-64 py-24 flex flex-col bg-card" id="about">
        <div className="flex items-start mb-16 gap-8">
          <div className="basis-1/4 text-justify">
            <Logo className="mb-4" />
            <p className="text-sm font-regular text-muted-foreground mb-8">
              {t("footer.description")}
            </p>
          </div>
          <div className="basis-1/6">
            <h6 className="text-lg font-semibold mb-4">
              {t("footer.useful.title")}
            </h6>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">
                <Link href="/documents" className="underline">
                  {t("footer.useful.items.templates")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="#pricing" className="underline">
                  {t("footer.useful.items.pricing")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="/faqs" className="underline">
                  {t("footer.useful.items.faqs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/6 text-justify">
            <h6 className="text-lg font-semibold mb-4">
              {t("footer.legal.title")}
            </h6>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">
                <Link href="" className="underline">
                  {t("footer.legal.items.privacy")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="" className="underline">
                  {t("footer.legal.items.terms")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="" className="underline">
                  {t("footer.legal.items.cookies")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/3 text-justify">
            <h6 className="text-lg font-semibold mb-4">
              {t("footer.suggestions.title")}
            </h6>
            <p className="text-sm font-regular text-muted-foreground mb-8">
              {t("footer.suggestions.description")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-center text-muted-foreground text-sm">
            ©2024 Paper {t("footer.ownership")}{" "}
            {process.env.NEXT_PUBLIC_DEVELOPER ?? "Sergio Peña Bayona"}.{" "}
            {t("footer.allRights")}
          </p>
          <span className="text-center text-muted-foreground text-sm">
            {t("footer.developer")}{" "}
            <Link
              href={process.env.NEXT_PUBLIC_GITHUB ?? ""}
              className="underline"
            >
              {process.env.NEXT_PUBLIC_DEVELOPER ?? "Sergio Peña Bayona"}
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-center text-muted-foreground text-sm w-48">
              {" "}
              {t("footer.support")}
            </span>
            <Button size="sm">
              <Coffee className="mr-2 w-4 h-4" />
              {t("footer.buyCoffee")}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
