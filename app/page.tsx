"use client";

import Menu from "./components/home/Menu";
import Inicio from "./components/Inicio";
import Sobremi from "./components/Sobremi";
import Habilidades from "./components/Habilidades";
import Educacion from "./components/Educacion";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <header className="h-full">
        <Menu />
        <Inicio />
      </header>
      <main>
        <Sobremi />
        <Habilidades />
        <Educacion />
        <section className="p-20 h-screen bg-cyan-500" id="proyectos">
          <p>Proyectos</p>
        </section>
        <section className="p-20 h-screen bg-cyan-600" id="contacto">
          <p>Contactos</p>
        </section>
      </main>
      <footer className="bg-cyan-700 text-center p-5">
        <div className="font-bold">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/melagora/"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-y-3 p-1 text-white border-black hover:text-black hover:border-white"
              title="Melvin González LinkedIn"
            >
              MELVIN GONZÁLEZ
            </a>{" "}
            - Todos los derechos reservados -
          </p>
        </div>
      </footer>
    </div>
  );
}
