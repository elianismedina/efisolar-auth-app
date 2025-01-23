import React from "react";
import { prisma } from "../../../lib/prisma";
import Link from "next/link";

const AllQuotesPage = async () => {
  const quotes = await prisma.quote.findMany({
    select: {
      id: true,
      email: true,
      location: true,
    },
  });
  return (
    <div>
      <h1>All Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <Link
            href={`/quote/${quote.id}`}
            key={quote.email}
            className="hover:underline"
          >
            <li key={quote.email}>{quote.email}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default AllQuotesPage;
