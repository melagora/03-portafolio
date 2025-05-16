import { time } from "console";
import Menu from "./components/Menu"; // ajusta el path si cambia

export default function Home() {
  return (
    <div>
      <header className="h-screen">
        <Menu />
        <section className="px-20 h-[90%] bg-amber-100">
          <p>1</p>
        </section>
      </header>
      <main>
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
      </main>
      <footer className="bg-amber-700 text-center p-5">
        <div className="font-bold">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/melagora/"
              target="_blank"
              rel="noopener noreferrer"
              className=" border-y-3 p-1 text-white border-black hover:text-black hover:border-white"
              title="Melvin González LinkedIn"
            >
              MELVIN GONZÁLEZ
            </a>{" "}
            - Todos los derechos reservados -
          </p>
        </div>
      </footer>
    </div>
  );
}
