export default function Home() {
  return (
    <div>
      <header className="h-screen">
        <nav className="flex h-[10%] bg-gray-800 text-white p-10 items-center">
          <section className=" w-[50%] flex justify-start">
            <p>CV - Melvin González</p>
          </section>
          <section className="w-[50%] flex justify-around">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#educacion">Educación</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </section>
        </nav>
        <section className="px-20 h-[90%] bg-amber-100">
          <p>1</p>
        </section>
      </header>
      <body>
        <section className="p-20 h-screen bg-amber-200" id="sobre-mi">
          <p>Sobre mí</p>
        </section>
        <section className="p-20 h-screen bg-amber-300" id="habilidades">
          <p>Habilidades</p>
        </section>
        <section className="p-20 h-screen bg-amber-400" id="educacion">
          <p>Educación</p>
        </section>
        <section className="p-20 h-screen bg-amber-500" id="proyectos">
          <p>Proyectos</p>
        </section>
        <section className="p-20 h-screen bg-amber-600" id="contacto">
          <p>Contactos</p>
        </section>
      </body>
      <footer></footer>
    </div>
  );
}
