import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">Next-Auth V5 Tutorial</h1>

      <Link href={`/quote/create`}>Cotizar</Link>
    </main>
  );
}
