import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex flex-col items-center gap-6 px-3 py-10">
      <h1 className="text-center text-4xl font-bold">
        Menos costos, más eficiencia
      </h1>
      <p className=" text-center">
        Ponemos la inteligencia artificial al servicio de tu empresa
      </p>
      <Image src="/images/AIBridge.png" alt="AIbril" width={150} height={150} />
      <footer className="text-center">
        <p>© 2025 ABridge solutions</p>
      </footer>
    </main>
  );
}
