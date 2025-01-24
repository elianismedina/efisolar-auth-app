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
        {quote?.userName || `Quote ${id}`}
      </h1>
      <div className="flex flex-col-2 gap-4 border border-gray-200 p-4 rounded-md bg-slate-100">
        <div className="font-semibold text-gray-500">
          <p>Email:</p>
          <p>Departamento:</p>
          <p>Teléfono:</p>
          <p>Tipo de solicitud:</p>
          <p>Tipo de techo:</p>
          <p>Tipo de conexión:</p>
          <p>Imagen factura:</p>
          <p>Comentarios:</p>
        </div>
        <div className="flex flex-col gap-2 text-gray-500">
          <p>{quote?.email || `Quote ${id}`}</p>
          <p>{quote?.location || `Quote ${id}`}</p>
          <p>{quote?.phoneNumber || `Quote ${id}`}</p>
          <p>{quote?.requestType || `Quote ${id}`}</p>
          <p>{quote?.roofType || `Quote ${id}`}</p>
          <p>{quote?.systemType || `Quote ${id}`}</p>
          <p>{quote?.billUrl || `Quote ${id}`}</p>
          <p>{quote?.additionalComments}</p>
        </div>
      </div>
    </div>
  );
}
