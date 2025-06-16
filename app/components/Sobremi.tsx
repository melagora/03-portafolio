"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Sobremi() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración más perceptible
      once: false, // Se repite cada vez que entra al viewport
      easing: "ease-in-out", // Animación más suave
      offset: 150, // Empieza un poco antes de entrar
    });
    AOS.refresh(); // Forzar refresco
  }, []);

  return (
    <section
      className="h-screen bg-cyan-200 flex items-center justify-center"
      id="sobre-mi"
    >
      <div
        className="w-[100%] sm:w-[70%] text-sm md:text-base h-full flex flex-col items-center text-justify justify-center sm:bg-cyan-950 p-6 rounded shadow-md gap-6 lg:gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <div
          data-aos="slide-up"
          data-aos-delay="100"
          data-aos-duration="2000"
          className="bg-cyan-300 border-1 border-cyan-400 rounded-lg p-4"
        >
          <p>
            Desarrollador Web con enfoque principal en front-end, apasionado por
            crear interfaces modernas, responsivas y funcionales que brinden una
            excelente experiencia de usuario. Trabajo principalmente con React,
            donde aplico principios sólidos de diseño de componentes
            reutilizables, manejo de estado con Hooks, navegación con React
            Router y validación de formularios, siempre priorizando la claridad
            del código y la mantenibilidad.
          </p>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          data-aos-duration="2000"
          className="bg-cyan-400 border-1 border-cyan-500 rounded-lg p-4"
        >
          <p>
            Además, tengo experiencia en el desarrollo back-end con PHP y
            Laravel, creando APIs RESTful robustas que permiten la gestión
            eficiente de datos (CRUD) y la integración fluida con el front-end.
            Esto me permite tener una visión completa del flujo de datos en
            aplicaciones web y colaborar efectivamente en equipos
            multidisciplinarios.
          </p>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="300"
          data-aos-duration="2000"
          className="bg-cyan-600 border-1 border-cyan-700 rounded-lg p-4"
        >
          <p>
            Para el diseño y estilado, utilizo CSS puro, así como frameworks
            como Tailwind y Bootstrap, asegurando interfaces consistentes,
            accesibles y visualmente atractivas. Me motiva aprender
            continuamente, aplicar buenas prácticas y optimizar el rendimiento
            en cada proyecto que desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
}
