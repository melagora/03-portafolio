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
    <section className="relative h-[90%] w-full overflow-hidden">
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
      <div className="relative z-10 text-white bg-cyan-950/75 flex items-center text-center justify-center h-full">
        <div className=" p-10 gap-3 w-[55%] h-full flex flex-col items-center justify-center">
          <p className="text-3xl">Soy Melvin González,</p>
          <p className="text-5xl font-bold">Desarrollador Front-End</p>
          <p className="text-sm font-extralight">
            Desarrollador con enfoque en Frontend, aunque también tengo
            experiencia FullStack. Me apasiona crear interfaces modernas,
            accesibles y funcionales.
          </p>
        </div>
        <div className="w-[35%] h-full flex flex-col gap-20 items-center justify-center">
          {/* Cuadrado */}
          <div className="w-[300px] h-[300px] border-8 border-cyan-300 hover:border-cyan-600 bg-cyan-950 flex items-center justify-center relative group">
            {/* Rombo */}
            <div className="w-[280px] h-[280px] border-8 border-cyan-600 group-hover:border-cyan-300 rotate-[45deg] overflow-hidden relative">
              {/* Imagen por defecto */}
              <img
                src="/perfil.jpg"
                alt="Foto de perfil"
                className="absolute top-0 left-0 w-full h-full object-cover rotate-[-45deg] scale-[1.08] transition-opacity duration-500 opacity-100 group-hover:opacity-0"
              />

              {/* Imagen al hacer hover */}
              <img
                src="/perfilAnimado1x1.png"
                alt="Foto animada de perfil"
                className="absolute top-0 left-0 w-full h-full object-cover rotate-[-45deg] scale-[1.08] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
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
