// app/components/Menu.tsx

import React from "react";
import { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col xl:flex-row xl:h-[10%] h-auto bg-cyan-900 text-white px-10 py-5 items-start xl:items-center">
      {/* Sección CV */}
      <section className="w-full xl:w-[50%] flex justify-between xl:justify-start items-center">
        <a
          href="https://www.linkedin.com/in/melagora/"
          target="_blank"
          rel="noopener noreferrer"
          title="Melvin González LinkedIn"
        >
          <div className="border-4 border-y-cyan-600 hover:border-x-cyan-600 hover:border-y-inherit h-[45px] px-5 flex justify-center items-center font-bold">
            <p>CV - Melvin González</p>
          </div>
        </a>

        {/* Botón hamburguesa pantalla pequeñas */}
        <button
          className="xl:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </section>

      {/* Menú de navegación */}
      <section
        className={`w-full xl:w-[50%] flex-col xl:flex-row justify-center xl:justify-around items-center font-bold gap-3 xl:gap-0 mt-5 xl:mt-0 xl:flex ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
          <div className="enlacesMenu">Sobre mí</div>
        </a>
        <a href="#habilidades" onClick={() => setMenuOpen(false)}>
          <div className="enlacesMenu">Habilidades</div>
        </a>
        <a href="#educacion" onClick={() => setMenuOpen(false)}>
          <div className="enlacesMenu">Educación</div>
        </a>
        <a href="#proyectos" onClick={() => setMenuOpen(false)}>
          <div className="enlacesMenu">Proyectos</div>
        </a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          <div className="enlacesMenu">Contacto</div>
        </a>
      </section>
    </nav>
  );
};

export default Menu;
