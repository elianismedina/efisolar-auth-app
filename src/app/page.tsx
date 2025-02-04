import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row md:gap-16 items-center justify-center gap-6 px-3 py-10 mx-auto max-w-7xl">
      <div className="p-8">
        <h1 className="text-left text-4xl font-bold">
          Potencia tu negocio con <br />{" "}
          <span className="text-amber-500">Agentes de IA personalizados</span>
        </h1>
        <p className=" text-left mt-4">
          Ayudamos a empresas a implementar soluciones de IA personalizadas y
          escalarlas sin empleados adicionales. <br /> No requiere conocimientos
          técnicos - Nosotros nos enacargamos de todo. <br /> Lidera el cambio,
          aumenta la productividad y deja que la automotización <br />
          impulse tu crecimiento.
        </p>
        <div className="flex flex-row gap-4">
          <Button className="mt-6">Comenzar ahora</Button>
          <Button className="mt-6" variant="secondary">
            Ver Demo
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/images/Heroimage.jpeg"
          alt="AI solutions"
          width={450}
          height={450}
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
