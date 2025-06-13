// app/components/Menu.tsx

import React, { useState, useEffect } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav className="relative z-50 flex flex-col xl:flex-row xl:h-[10%] h-auto bg-cyan-900 text-white px-10 p-2.5 xl:py-5 items-start xl:items-center transition-all duration-300 ease-in-out">
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
        className={`
        w-full xl:w-[50%]
        flex-col xl:flex-row
        items-center justify-center text-center
        font-bold gap-3 xl:gap-0 pt-5 xl:pt-0
        overflow-hidden transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "flex max-h-[500px] opacity-100"
            : "hidden max-h-0 opacity-0"
        }
        xl:flex xl:max-h-none xl:opacity-100
      `}
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
