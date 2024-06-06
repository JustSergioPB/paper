"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/client";
import { Input } from "../ui/input";
import { SquareUserRound } from "lucide-react";

type Props = {
  lang: string;
  className?: string;
};

export default function CvForm({ lang, className }: Props) {
  const { t } = useTranslation(lang, "cv-form");
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

  const cvSchema = z.object({
    personalDetails: z.object({
      jobTitle: z.string(),
      name: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string(),
      city: z.string(),
      country: z.string(),
      profilePic: z
        .any()
        .refine((file: File) => ACCEPTED_IMAGE_TYPES.includes(file.type)),
    }),
    professionalSummary: z.string(),
    employmentHistory: z.array(
      z.object({
        jobTitle: z.string(),
        employer: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        city: z.string(),
        description: z.string(),
      })
    ),
    education: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        city: z.string(),
        description: z.string(),
      })
    ),
    links: z.array(z.object({ name: z.string(), url: z.string() })),
    skills: z.array(z.object({ name: z.string(), level: z.string() })),
    languages: z.array(z.object({ name: z.string(), level: z.string() })),
  });

  const form = useForm<z.infer<typeof cvSchema>>({
    resolver: zodResolver(cvSchema),
  });

  function onSubmit(data: z.infer<typeof cvSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "flex flex-col")}
      >
        <div className="grow shrink-0 basis-auto h-0 overflow-y-hidden space-y-8 p-2">
          <div>
            <h2 className="text-xl font-semibold">{t("personalDetails.title")}</h2>
          </div>
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="personalDetails.profilePic"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormControl>
                    <>
                      <div className="flex items-center gap-2">
                        <div className="bg-neutral-100 h-16 w-16 rounded-lg flex items-center justify-center">
                          <SquareUserRound />
                        </div>
                        <Button variant="ghost" size="sm">
                          {t("personalDetails.fields.profilePic.upload")}
                        </Button>
                      </div>
                      <Input
                        className="hidden"
                        type="file"
                        accept={ACCEPTED_IMAGE_TYPES.join(", ")}
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalDetails.jobTitle"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.jobTitle.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.jobTitle.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="personalDetails.name"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.name.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.name.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalDetails.name"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.lastName.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.lastName.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="personalDetails.email"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.email.placeholder")}
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalDetails.phone"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.phone.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.phone.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center gap-8">
            <FormField
              control={form.control}
              name="personalDetails.city"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.city.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.city.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="personalDetails.fields.country"
              render={({ field }) => (
                <FormItem className="basis-1/2">
                  <FormLabel>{t("personalDetails.fields.country.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("personalDetails.fields.country.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2">
          <Button type="submit">{t("button")}</Button>
        </div>
      </form>
    </Form>
  );
}
