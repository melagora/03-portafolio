"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillsCol1 = [
  { label: "HTML5", bg: "bg-orange-500" },
  { label: "CSS3", bg: "bg-blue-700" },
  { label: "JavaScript", bg: "bg-yellow-500" },
  { label: "React", bg: "bg-blue-500" },
  { label: "Tailwind CSS", bg: "bg-cyan-400" },
  { label: "Bootstrap", bg: "bg-fuchsia-800" },
  { label: "Next.js", bg: "bg-gray-800", text: "text-white" },
  { label: "Node.js", bg: "bg-green-500" },
  { label: "TypeScript", bg: "bg-blue-600" },
  { label: "API REST", bg: "bg-green-600" },
  { label: "GitHub", bg: "bg-gray-700", text: "text-white" },
  { label: "Visual Studio Code", bg: "bg-blue-800" },
];

const skillsCol2 = [
  { label: "Netlify", bg: "bg-emerald-800", text: "text-white" },
  { label: "Vercel", bg: "bg-gray-600", text: "text-white" },
  { label: "Java", bg: "bg-yellow-400" },
  { label: "GitHub", bg: "bg-gray-700", text: "text-white" },
  { label: "Github Pages", bg: "bg-gray-900", text: "text-white" },
  { label: "Postman", bg: "bg-orange-500" },
  { label: "PHP", bg: "bg-blue-500" },
  { label: "Laravel", bg: "bg-red-500" },
  { label: "MySQL", bg: "bg-blue-400" },
  { label: "DB SQL / NOSQL", bg: "bg-orange-600" },
  { label: "Git", bg: "bg-orange-700" },
  { label: "Figma", bg: "bg-purple-500" },
];

type SkillProps = {
  label: string;
  bg: string;
  text?: string;
  animation: string;
};

// Dentro de tu componente SkillBox
const SkillBox = ({ label, bg, text = "", animation }: SkillProps) => (
  <div
    data-aos={animation}
    data-aos-duration="2000"
    data-aos-delay="100"
    className={`flex items-center justify-center text-center ${bg} ${text} h-13 lg:h-20 rounded-xl border-2 border-white shadow-lg hover:shadow-[0_4px_16px_4px_rgba(0,0,0,1)] hover:border-cyan-400 hover:border-3 transition-shadow duration-300 cursor-pointer`}
  >
    <p>{label}</p>
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
      className="h-screen bg-cyan-300 flex items-center justify-center overflow-hidden"
      id="habilidades"
    >
      <div
        className="w-full sm:w-[70%] text-sm md:text-base h-full flex items-center justify-center sm:bg-cyan-900 p-6 rounded shadow-md gap-2 lg:gap-2 font-bold overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <div className="columna1 w-full h-[60%] grid grid-cols-2 lg:grid-cols-3 gap-2">
          {skillsCol1.map((skill, index) => (
            <SkillBox key={index} {...skill} animation="fade-up-right" />
          ))}
        </div>
        <div className="columna2 w-full h-[60%] grid grid-cols-2 lg:grid-cols-3 gap-2">
          {skillsCol2.map((skill, index) => (
            <SkillBox key={index} {...skill} animation="fade-up-left" />
          ))}
        </div>
      </div>
    </section>
  );
}
