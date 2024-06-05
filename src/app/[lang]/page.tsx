import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";
import { FEATURES } from "../../constants/features";
import Feature from "@/components/paper/feature";
import PricingCard from "@/components/paper/pricing-card";
import Navbar from "@/components/paper/navbar";
import Logo from "@/components/paper/logo";
import ThemeToggle from "@/components/paper/theme-toggle";
import { useTranslation } from "@/i18n/server";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/i18n/constants";
import TemplateCard from "@/components/paper/template-card";
import { TEMPLATES } from "@/constants/templates";
import { SuggestionForm } from "@/components/forms/suggestion-form";
import { PRICINGS } from "@/constants/pricings";
import { ROUTES, APP_ROUTE } from "@/constants/routes";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "landing-page");
  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth h-screen">
      <header className="flex items-center justify-between p-5 xl:px-64 xl:pt-8">
        <Logo />
        <div className="hidden md:flex md:items-center gap-4">
          <Navbar routes={ROUTES} t={t} />
          <Link href="" className={buttonVariants({ size: "sm" })}>
            {t("access")}
          </Link>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center py-32 px-5 xl:px-64">
        <div className="flex flex-col items-center xl:w-2/3">
          <h1 className="text-3xl font-black mb-8 lg:text-5xl">
            {t("welcome")} <span className="text-primary">Paper</span>
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-center lg:text-2xl">
            {t("minimalist")}{" "}
            <span className="text-primary">{t("template")}</span>{" "}
            {t("provider")}
          </h2>
          <p className="font-regular mb-8 text-muted-foreground text-center lg:text-lg">
            {t("catchphrase")}
          </p>
        </div>
        <ul className="flex gap-8 overflow-x-auto w-full xl:grid xl:grid-cols-3 xl:w-auto mb-4">
          {TEMPLATES.map((template) => (
            <li key={template.href}>
              <TemplateCard template={template} className="w-72 h-96" t={t} />
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <Link
            href={APP_ROUTE}
            className="flex items-center text-sm hover:text-primary hover:underline"
          >
            {t("cta")} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </main>
      <section
        className="flex flex-col items-center justify-center py-24 px-5 xl:px-64"
        id="features"
      >
        <p className="text-xl font-semibold mb-2 lg:text-2xl">
          {t("features.title")}
        </p>
        <p className="font-regular text-muted-foreground mb-8 lg:text-lg">
          {t("features.description")}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <li key={index}>
              <Feature
                feature={feature}
                t={t}
                className="md:last:col-span-2 md:flex md:flex-col md:items-center lg:items-start lg:last:col-span-1 xl:w-72"
              />
            </li>
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col justify-center py-24 px-5 lg:items-center xl:px-64"
        id="pricing"
      >
        <h2 className="text-xl font-semibold mb-2 lg:text-2xl">
          {t("pricing.title")}
        </h2>
        <p className="font-regular text-muted-foreground mb-8 lg:text-center lg:text-lg">
          {t("pricing.description")}
        </p>
        <ul className="flex gap-8 overflow-x-auto w-full xl:grid xl:grid-cols-3 xl:w-auto">
          {PRICINGS.map((pricing) => (
            <li key={pricing.plan}>
              <PricingCard
                pricing={pricing}
                className="w-72 grow shrink-0 basis-auto"
                t={t}
              />
            </li>
          ))}
        </ul>
      </section>
      <footer
        className="flex flex-col bg-card border-t px-5 py-24 xl:grid-rows-1 xl:px-64"
        id="about"
      >
        <div className="grid grid-cols-12 items-start mb-16 gap-8">
          <div className="col-span-12 xl:col-span-4">
            <Logo className="mb-4" />
            <p className="text-sm font-regular text-muted-foreground mb-8 text-justify">
              {t("footer.description")}
            </p>
            <div className="space-y-2">
              <h6 className="text-sm font-semibold text-justify">
                {t("footer.support")}
              </h6>
              <Button size="sm">
                <Coffee className="mr-2 w-4 h-4" />
                {t("footer.buyCoffee")}
              </Button>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
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
              <li className="text-sm text-muted-foreground">
                <Link href="/contact" className="underline">
                  {t("footer.useful.items.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-2">
            <h6 className="text-lg font-semibold mb-4">
              {t("footer.legal.title")}
            </h6>
            <ul className="space-y-4">
              <li className="text-sm text-muted-foreground">
                <Link href="/privacy" className="underline">
                  {t("footer.legal.items.privacy")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="/terms" className="underline">
                  {t("footer.legal.items.terms")}
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <Link href="/cookies" className="underline">
                  {t("footer.legal.items.cookies")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <h6 className="text-lg font-semibold mb-4">
              {t("footer.suggestions.title")}
            </h6>
            <p className="text-sm font-regular text-muted-foreground mb-4">
              {t("footer.suggestions.description")}
            </p>
            <SuggestionForm className="mb-12" lang={lang} />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Select>
                <SelectTrigger className="min-w-32">
                  <SelectValue placeholder={t(`langs.${lang}`)} />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <Link key={lang} href={`/${lang}`} legacyBehavior passHref>
                      <SelectItem value={lang}>{t(`langs.${lang}`)}</SelectItem>
                    </Link>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p className="text-center text-muted-foreground text-sm mb-4 md:mb-0">
            2024© Paper {t("footer.ownership")}{" "}
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
      </footer>
    </div>
  );
}
