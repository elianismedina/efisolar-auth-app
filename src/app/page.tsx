import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row md:gap-16 items-center justify-center gap-6 px-3 mx-auto max-w-7xl">
      <div className="p-8">
        <h1 className="text-center md:text-left text-4xl font-bold">
          Potencia tu negocio con <br />{" "}
          <span className="text-primary">Agentes de IA personalizados</span>
        </h1>
        <p className=" text-center md:text-left mt-4">
          Somos tu aliado ideal para implementar{" "}
          <span className="font-semibold">soluciones de IA</span> personalizadas
          y escalarlas sin empleados adicionales. <br /> No requiere
          conocimientos técnicos-Nosotros nos enacargamos de todo. <br /> Lidera
          el cambio, aumenta la productividad y deja que la{" "}
          <span className="font-semibold">automatización</span>
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
