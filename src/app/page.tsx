import { buttonVariants } from "@/components/ui/button";
import { Origami, PencilRuler } from "lucide-react";
import Link from "next/link";
import { FEATURES } from "./features";
import Feature from "@/components/paper/feature";
import { PRICINGS } from "./pricings";
import PricingCard from "@/components/paper/pricing-card";
import Navbar from "@/components/paper/navbar";
import { ROUTES } from "./routes";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="h-screen px-80 py-8 overflow-y-auto overflow-x-hidden scroll-smooth">
      <header className="flex items-center justify-between mb-16">
        <span className="flex items-center gap-2">
          <Origami />
          <span className="text-xl font-regular">Paper</span>
        </span>
        <div>
          <Navbar routes={ROUTES} />
          <div></div>
        </div>
      </header>
      <section className="flex items-center mb-16">
        <div className="basis-1/2">
          <h1 className="text-4xl font-black mb-2">
            Welcome to <span className="text-primary">Paper</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            A minimalist <span className="text-primary">CV</span> builder.
          </h2>
          <p className="text-lg font-regular mb-8 text-slate-500 dark:text-slate-400">
            The job market is already complicated. Building your CV
            shouldn&apos;t be. Let us help you keeping it simple.
          </p>
          <p className="font-semibold mb-4">
            Another CV builder? Hell Yeah! But this one is:{" "}
          </p>
          <ul className="space-y-4 mb-8">
            {FEATURES.map((feature, index) => (
              <Feature
                key={index}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
          <Link href="/builder" className={cn(buttonVariants())}>
            <PencilRuler className="h-4 w-4 mr-2" />
            Start building
          </Link>
        </div>
      </section>
      <section
        className="flex flex-col items-center justify-center mb-16"
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
    </main>
  );
}
