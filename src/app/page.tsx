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

export default function Home() {
  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth h-screen">
      <header className="flex items-center justify-between px-64 pt-8">
        <Logo />
        <div className="flex items-center gap-4">
          <Navbar routes={ROUTES} />
          <Button size="sm">Sign in</Button>
        </div>
      </header>
      <main className="flex justify-center items-center my-48 px-80">
        <div className="flex flex-col items-center w-2/3">
          <h1 className="text-4xl font-black mb-2">
            Welcome to <span className="text-primary">Paper</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            A minimalist <span className="text-primary">template</span> provider
            for profesionals.
          </h2>
          <p className="text-lg font-regular mb-8 text-slate-500 dark:text-slate-400 text-center">
            Working is already hard. Handling your paperwork shouldn&apos;t be.
            Let us help you keeping it simple.
          </p>
          <Link href="/documents" className={cn(buttonVariants())}>
            <PencilRuler className="h-4 w-4 mr-2" />
            Start building
          </Link>
        </div>
      </main>
      <section className=" flex flex-col items-center justify-cente mb-24 px-80">
        <p className="text-2xl font-semibold mb-2">Another document manager?</p>
        <p className="text-lg font-regular text-slate-500 dark:text-slate-400 mb-8">
          Hell Yeah! But this one is:
        </p>
        <ul className="flex gap-4 items-center mb-8">
          {FEATURES.map((feature, index) => (
            <Feature key={index} feature={feature} className="basis-1/3" />
          ))}
        </ul>
      </section>
      <section
        className="flex flex-col items-center justify-center mb-24 px-80"
        id="pricing"
      >
        <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
        <p className="text-lg font-regular text-slate-500 dark:text-slate-400 mb-8">
          Only pay for what you need. No hidden fees. No complicated pricing.
        </p>
        <div className="flex items-center justify-center gap-4">
          {PRICINGS.map((pricing, index) => (
            <PricingCard key={index} pricing={pricing} className="h-96 w-72" />
          ))}
        </div>
      </section>
      <footer
        className="border-t dark:border-t-slate-500 px-64 py-24 flex flex-col"
        id="about"
      >
        <div className="flex items-start mb-16 gap-8">
          <div className="basis-1/4 text-justify">
            <Logo className="mb-4" />
            <p className="text-sm font-regular text-slate-500 dark:text-slate-40 mb-8">
              Paper is a minimalist template provider dedicated to offering a
              simple, user-friendly alternative in the software market, which is
              often cluttered with subscription-based, feature-heavy products
              that can overwhelm users.
            </p>
          </div>
          <div className="basis-1/6">
            <h6 className="text-lg font-semibold mb-4">Useful links</h6>
            <ul className="space-y-4">
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="/documents" className="underline">
                  Manage documents
                </Link>
              </li>
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="#pricing" className="underline">
                  Pricing
                </Link>
              </li>
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="/faqs" className="underline">
                  FAQS
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/6 text-justify">
            <h6 className="text-lg font-semibold mb-4">Legal</h6>
            <ul className="space-y-4">
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="" className="underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="" className="underline">
                  Terms of Service
                </Link>
              </li>
              <li className="text-sm text-slate-500 dark:text-slate-400">
                <Link href="" className="underline">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-1/3 text-justify">
            <h6 className="text-lg font-semibold mb-4">
              Want to see a template?
            </h6>
            <p className="text-sm font-regular text-slate-500 dark:text-slate-40 mb-8">
              Send me a suggestion and I&apos;ll try my best
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
            ©2024 Paper is a product of Sergio Peña Bayona. All rights reserved.
          </p>
          <span className="text-center text-slate-500 dark:text-slate-400 text-sm">
            Developed by{" "}
            <Link href="" className="underline">
              Sergio Peña Bayona
            </Link>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-center text-slate-500 dark:text-slate-400 text-sm w-48">
              {" "}
              Do you like the project and would you like to contribute?
            </span>
            <Button size="sm">
              <Coffee className="mr-2 w-4 h-4" />
              Buy me a coffee
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
