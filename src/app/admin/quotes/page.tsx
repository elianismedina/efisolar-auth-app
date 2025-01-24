import { prisma } from "../../../lib/prisma";
import Link from "next/link";

export const revalidate = 0;
const AllQuotesPage = async () => {
  // Fetch quotes directly in the server component
  const quotes = await prisma.quote.findMany({
    select: {
      id: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-center mt-4">All Quotes</h1>
      <ul className="mt-4 flex flex-col items-center">
        {quotes.map((quote) => (
          <li key={quote.id} className="hover:underline">
            <Link href={`/quote/${quote.id}`}>{quote.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllQuotesPage;
