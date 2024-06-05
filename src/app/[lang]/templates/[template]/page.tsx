import CvForm from "@/components/forms/cv-form";

export default async function Template({
  params: { lang, template },
}: {
  params: { lang: string; template: string };
}) {
  return (
    <main className="h-screen overflow-y-auto">
      <section>
        <CvForm lang={lang} />
      </section>
    </main>
  );
}
