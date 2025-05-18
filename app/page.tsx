"use client";

import { useEffect, useRef } from "react";
import Menu from "./components/Menu";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="h-screen w-full">
      <header className="h-full">
        <Menu />
        <section className="relative h-[90%] w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="/homeVideoBackground.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="relative z-10 text-white flex items-center justify-center h-full">
            <p className="text-3xl font-bold">video de muestra</p>
          </div>
        </section>
      </header>
      <main>
        <section className="p-20 h-screen bg-amber-200" id="sobre-mi">
          <p>Sobre mí</p>
        </section>
        <section className="p-20 h-screen bg-amber-300" id="habilidades">
          <p>Habilidades</p>
        </section>
        <section className="p-20 h-screen bg-amber-400" id="educacion">
          <p>Educación</p>
        </section>
        <section className="p-20 h-screen bg-amber-500" id="proyectos">
          <p>Proyectos</p>
        </section>
        <section className="p-20 h-screen bg-amber-600" id="contacto">
          <p>Contactos</p>
        </section>
      </main>
      <footer className="bg-amber-700 text-center p-5">
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
