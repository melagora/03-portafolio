"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Sobremi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración del fade
      once: false, // Solo una vez al hacer scroll
    });
  }, []);

  return (
    <section
      className="h-screen bg-cyan-200 flex items-center justify-center"
      id="sobre-mi"
    >
      <div
        className="w-[70%] h-full flex flex-col items-center justify-center bg-cyan-950 text-white p-6 rounded shadow-md gap-10"
        data-aos="fade-up"
      >
        <div data-aos="fade-up" data-aos-delay="100">
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
        <div data-aos="fade-up" data-aos-delay="200">
          <p>
            Además, tengo experiencia en el desarrollo back-end con PHP y
            Laravel, creando APIs RESTful robustas que permiten la gestión
            eficiente de datos (CRUD) y la integración fluida con el front-end.
            Esto me permite tener una visión completa del flujo de datos en
            aplicaciones web y colaborar efectivamente en equipos
            multidisciplinarios.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <p>
            Para el diseño y estilado, utilizo CSS puro, así como frameworks
            como Tailwind y Bootstrap, asegurando interfaces consistentes,
            accesibles y visualmente atractivas. Me motiva aprender
            continuamente, aplicar buenas prácticas y optimizar el rendimiento
            en cada proyecto que desarrollo.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <p>
            Estoy listo para asumir nuevos retos, aportar valor y seguir
            creciendo junto a un equipo profesional. Si buscas un desarrollador
            Full Stack con base sólida en front-end y conocimientos back-end,
            ¡estaré encantado de conectar!
          </p>
        </div>
      </div>
    </section>
  );
}
