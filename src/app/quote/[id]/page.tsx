import { prisma } from "../../../lib/prisma";

import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: { id: string };
}
const getQuote = cache(async (id: string) => {
  return prisma.quote.findUnique({
    where: { id },
  });
});
export async function generateStaticParams() {
  const allQuotes = await prisma.quote.findMany();
  return allQuotes.map(({ id }) => ({ id }));
}
export async function generateMetadata({ params: { id } }: PageProps) {
  const quote = await getQuote(id);

  return {
    title: quote?.email || `Quote ${id}`,
  };
}
export default async function Page({ params: { id } }: PageProps) {
  // Artificial delay to showcase static caching
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const quote = await getQuote(id);

  if (!quote) notFound();

  return (
    <div className="mx-3 my-10 flex flex-col items-center gap-3">
      <h1 className="text-center text-xl font-bold">
        {quote?.email || `Quote ${id}`}
      </h1>
    </div>
  );
}
