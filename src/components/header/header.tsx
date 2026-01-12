import Contact from "./contactButton";

export default function Header() {
    return(
        <section className="flex flex-col w-full h-158">
          <div
            className="
              bg-[linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('/images/bg-banner.png')]
              md:bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url('/images/bg-banner.png')]
              bg-cover
              bg-right
              w-full
              flex-1
              flex items-center
            "
          >
            <div
              className="
                text-start
                w-full md:w-200
                px-6 md:m-12
              "
            >
              <h1 className="text-white font-bold font-anton text-4xl md:text-6xl text-shadow-sm">
                Prevenção, Proteção & Controle de Pragas
              </h1>

              <h2 className="text-xl md:text-2xl text-white font-impact mt-4">
                Sua tranquilidade começa com um ambiente livre de pragas
              </h2>

              <div className="mt-6">
                <Contact />
              </div>
            </div>
          </div>
        </section>
    )
}