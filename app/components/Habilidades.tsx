"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillsCol1 = [
  { label: "HTML5", bg: "bg-orange-500" },
  { label: "CSS3", bg: "bg-blue-700" },
  { label: "JavaScript", bg: "bg-yellow-500" },
  { label: "React", bg: "bg-blue-500" },
  { label: "Tailwind CSS", bg: "bg-blue-400" },
  { label: "Bootstrap", bg: "bg-fuchsia-800" },
  { label: "Next.js", bg: "bg-gray-900", text: "text-white" },
  { label: "Node.js", bg: "bg-green-500" },
];

const skillsCol2 = [
  { label: "Netlify", bg: "bg-emerald-800" },
  { label: "Vercel", bg: "bg-gray-600", text: "text-white" },
  { label: "Github Pages", bg: "bg-gray-900", text: "text-white" },
  { label: "PHP", bg: "bg-blue-300" },
  { label: "Laravel", bg: "bg-red-500" },
  { label: "MySQL", bg: "bg-blue-400" },
  { label: "Firebase", bg: "bg-orange-600" },
  { label: "MongoDB", bg: "bg-green-700" },
];

type SkillProps = {
  label: string;
  bg: string;
  text?: string;
  animation: string;
};

const SkillBox = ({ label, bg, text = "", animation }: SkillProps) => (
  <div
    data-aos={animation}
    data-aos-duration="2000"
    data-aos-delay="100"
    className={`flex items-center justify-center ${bg} ${text} h-10 lg:h-20 rounded-xl`}
  >
    <p>{label}</p>
  </div>
);

export default function Habilidades() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
      offset: 150,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="h-screen bg-cyan-300 flex items-center justify-center"
      id="habilidades"
    >
      <div
        className="w-[100%] sm:w-[70%] text-sm md:text-base h-full flex items-center justify-center sm:bg-cyan-900 p-6 rounded shadow-md gap-6 lg:gap-10 font-bold"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="100"
      >
        <div className="columna1 w-full h-[90%] grid grid-cols-1 lg:grid-cols-2 lg:gap-2 items-center justify-center">
          {skillsCol1.map((skill, index) => (
            <SkillBox key={index} {...skill} animation="fade-right" />
          ))}
        </div>
        <div className="columna2 w-full h-[90%] grid grid-cols-1 lg:grid-cols-2 lg:gap-5 items-center justify-center">
          {skillsCol2.map((skill, index) => (
            <SkillBox key={index} {...skill} animation="fade-left" />
          ))}
        </div>
      </div>
    </section>
  );
}
