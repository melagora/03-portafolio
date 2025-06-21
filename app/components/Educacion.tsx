"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const educationCol = [
  {
    tittle: "Ingeniería de Sistemas Informáticos (5°a)",
    institution: "Universidad de El Salvador",
    bg: "bg-teal-500",
    animation: "fade-up",
  },
  {
    tittle: "Full Stack Developer Jr",
    institution: "Bootcamp KODIGO El Salvador",
    bg: "bg-cyan-500",
    animation: "fade-up",
  },
  {
    tittle: "Java Developer Jr",
    institution: "Bootcamp KODIGO El Salvador",
    bg: "bg-sky-500",
    animation: "fade-up",
  },
  {
    tittle: "Técnico Programador Analista en 4° Gen",
    institution: "Manchester Computer Training - Presencial",
    bg: "bg-blue-500",
    animation: "fade-up",
  },
  {
    tittle: "Formación: Java y Spring Boot",
    institution: "Alura Latam - Online",
    bg: "bg-indigo-500",
    animation: "fade-up",
  },
  {
    tittle: "SQL con MySQL",
    institution: "Alura Latam - Online",
    bg: "bg-violet-500",
    animation: "fade-up",
  },
  {
    tittle: "Fundamentos en Gestión de Proyectos",
    institution: "SoyLider.net - Online",
    bg: "bg-purple-500",
    animation: "fade-up",
  },
  {
    tittle: "Scrum Foundation Professional Certificate SFPC (v2020) Spanish",
    institution: "CertiProf - Online",
    bg: "bg-fuchsia-500",
    animation: "fade-up",
  },
];

type EducationProps = {
  tittle: string;
  institution: string;
  bg: string;
  text?: string;
  animation: string;
};

// Dentro de tu componente SkillBox
const EducationBox = ({
  tittle,
  institution,
  bg,
  text = "",
  animation,
}: EducationProps) => (
  <div
    data-aos={animation}
    data-aos-duration="2000"
    data-aos-delay="100"
    className={`flex items-center justify-center text-center ${bg} ${text} h-13 lg:h-20 rounded-xl border-2 border-white shadow-lg hover:border-3 transition-shadow duration-300 cursor-pointer`}
  >
    <p>
      {tittle}
      <br />
      {institution}
    </p>
  </div>
);

export default function Habilidades() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      easing: "ease-in-out",
      offset: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="h-screen bg-cyan-400 flex items-center justify-center overflow-hidden"
      id="educacion"
    >
      <div
        className="w-full sm:w-[70%] text-sm md:text-base h-full flex items-center justify-center sm:bg-cyan-950 p-6 gap-2 lg:gap-2 font-medium overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <div className="columna1 w-full h-[100%] sm:h-[100%] lg:h-[70%] grid grid-cols-1 lg:grid-cols-2 gap-2">
          {educationCol.map((educacion, index) => (
            <EducationBox key={index} {...educacion} animation="fade-up" />
          ))}
        </div>
      </div>
    </section>
  );
}
