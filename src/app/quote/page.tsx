import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function Home() {
  const quotes = await prisma.user.findMany();

  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Next-Auth V5 Tutorial</h1>
      <h2 className="text-center text-2xl font-semibold">Quotes</h2>
      <ul className="list-inside list-disc">
        {quotes.map((quote) => (
          <li key={quote.id}>
            <Link href={`/quote/${quote.id}`} className="hover:underline">
              {quote.email || `User ${quote.id}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
