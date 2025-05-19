// app/components/Menu.tsx

import React from "react";

const Menu = () => {
  return (
    <nav
      className="flex h-[10%] bg-cyan-900 text-white items-center px-10"
      id="inicio"
    >
      <section className="w-[50%] flex justify-start font-bold">
        <a
          href="https://www.linkedin.com/in/melagora/"
          target="_blank"
          rel="noopener noreferrer"
          title="Melvin González LinkedIn"
        >
          <div className="border-4 border-y-cyan-600 hover:border-x-cyan-600 hover:border-y-inherit h-[45px] px-5 flex justify-center items-center">
            <p>CV - Melvin González</p>
          </div>
        </a>
      </section>
      <section className="w-[50%] h-full flex justify-around font-bold">
        <a href="#sobre-mi">
          <div className="enlacesMenu">Sobre mí</div>
        </a>
        <a href="#habilidades">
          <div className="enlacesMenu">Habilidades</div>
        </a>
        <a href="#educacion">
          <div className="enlacesMenu">Educación</div>
        </a>
        <a href="#proyectos">
          <div className="enlacesMenu">Proyectos</div>
        </a>
        <a href="#contacto">
          <div className="enlacesMenu">Contacto</div>
        </a>
      </section>
    </nav>
  );
};

export default Menu;
