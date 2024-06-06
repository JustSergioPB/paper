import CvForm from "@/components/forms/cv-form";
import CvPdf from "@/components/pdfs/cv-pdf";

export default async function Template({
  params: { lang, template },
}: {
  params: { lang: string; template: string };
}) {
  return (
    <main className="h-screen flex">
      <section className="h-full basis-1/2">
        <CvForm className="h-full p-14" lang={lang} />
      </section>
      <section className="h-full basis-1/2">
        <CvPdf className="h-full w-full" lang={lang} />
      </section>
    </main>
  );
}
