"use client";

import BotonCV from "./home/BotonCV";
import { ToastContainer } from "react-toastify";
import { useEffect, useRef } from "react";

export default function Inicio() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);
  return (
    <section className="relative h-screen xl:h-[90%] w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className=" absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/homeVideoBackground.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="DIVPRINCIPAL flex flex-col lg:flex-row lg:relative lg:z-10 text-white bg-cyan-950/75 items-center text-center justify-center h-screen max-h-full overflow-y-auto lg:pb-0">
        <div className="DIV1 order-2 lg:order-1 p-5 lg:p-10 gap-2 lg:gap-3 w-[100%] lg:w-[55%] h-full flex flex-col items-center justify-center">
          <p className="text-4xl lg:text-5xl font-bold">
            Desarrollador Front-End
          </p>
          <p className="text-sm font-extralight">
            Desarrollador con enfoque en Frontend, aunque también tengo
            experiencia FullStack. Me apasiona crear interfaces modernas,
            accesibles y funcionales.
          </p>
        </div>
        <div className="DIV2 order-1 lg:order-2 lg:w-[35%] h-full flex pt-20 flex-col gap-10 lg:gap-20 items-center justify-center">
          {/* Cuadrado */}
          <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-8 border-cyan-300 hover:border-cyan-600 bg-cyan-950 flex items-center justify-center relative group">
            {/* Rombo */}
            <div className="w-[180px] h-[180px] lg:w-[280px] lg:h-[280px] border-8 border-cyan-600 group-hover:border-cyan-300 rotate-[45deg] overflow-hidden relative">
              {/* Imagen por defecto */}
              <img
                src="/perfil.jpg"
                alt="Foto de perfil"
                className="absolute top-0 left-0 w-full h-full object-cover rotate-[-45deg] scale-[1.12] lg:scale-[1.08] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />

              {/* Imagen al hacer hover */}
              <img
                src="/perfilAnimado1x1.png"
                alt="Foto animada de perfil"
                className="absolute top-0 left-0 w-full h-full object-cover rotate-[-45deg] scale-[1.12] lg:scale-[1.08] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>
          <div>
            <BotonCV />
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
