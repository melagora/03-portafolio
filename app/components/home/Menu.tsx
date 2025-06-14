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
      <section className="w-full xl:w-[25%] flex justify-between xl:justify-start items-center">
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
    w-full xl:w-[100%]
    flex-col xl:flex-row
    items-start xl:items-center
    justify-start xl:justify-end
    font-bold pt-5 xl:pt-0
    overflow-hidden transition-all duration-300 ease-in-out
    ${menuOpen ? "flex max-h-[500px] opacity-100" : "hidden max-h-0 opacity-0"}
    xl:flex xl:max-h-none xl:opacity-100
  `}
      >
        {[
          { href: "#sobre-mi", text: "Sobre mí" },
          { href: "#habilidades", text: "Habilidades" },
          { href: "#educacion", text: "Educación" },
          { href: "#proyectos", text: "Proyectos" },
          { href: "#contacto", text: "Contacto" },
        ].map(({ href, text }) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="w-full xl:w-auto"
          >
            <div className="w-full h-[60px] px-10 flex items-center justify-center hover:bg-cyan-600 hover:underline transition-colors duration-300">
              {text}
            </div>
          </a>
        ))}
      </section>
    </nav>
  );
};

export default Menu;
