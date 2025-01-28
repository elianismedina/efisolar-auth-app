import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">
        Menos costos, menos huella de carbono
      </h1>
      <p>
        Te ofrecemos lo mejor de la energía solar para tu empresa: un futuro
        verde y sostenible
      </p>
      <Image src="/images/AIbril.png" alt="AIbril" width={150} height={150} />
      <footer className="text-center">
        <p>© 2025 AIbril solutions</p>
      </footer>
    </main>
  );
}
