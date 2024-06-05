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
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/client";
import { Send } from "lucide-react";

type Props = {
  className?: string;
  lang: string;
};

export function SuggestionForm({ className, lang }: Props) {
  const { t } = useTranslation(lang, "landing-page");
  const MIN = 10;
  const MAX = 150;

  const FormSchema = z.object({
    suggestion: z
      .string()
      .min(MIN, {
        message: t("footer.suggestions.errors.min", { min: MIN }),
      })
      .max(MAX, {
        message: t("footer.suggestions.errors.max", { max: MAX }),
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(className, "space-y-6")}
      >
        <FormField
          control={form.control}
          name="suggestion"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={t("footer.suggestions.placeholder")}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("footer.suggestions.hint", { min: MIN, max: MAX })}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          <Send className="h-4 w-4 mr-2" />
          {t("footer.suggestions.button")}
        </Button>
      </form>
    </Form>
  );
}
