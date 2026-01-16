import Contact from "../header/contactButton";

export default function PestControl() {
    return(
        <section className="flex flex-col md:flex-row w-full p-7 gap-8 md:gap-16">

            <div className="w-full md:w-1/2 group overflow-hidden rounded-xl">
                <div
                className="
                    bg-[url('/images/water-tank-clean.png')]
                    bg-contain bg-no-repeat bg-center
                    w-full
                    h-96 sm:h-[28rem]
                    md:h-[420px] lg:h-[480px]
                    transition-transform duration-500 ease-out
                    scale-95
                    group-hover:scale-100
                "
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="font-bold text-2xl md:text-3xl mb-4">
                Serviço especializado de limpeza de caixas d’água e cisternas
                </h2>

                <p className="mb-6">
                Somos especializados na limpeza de caixas d’água e cisternas,
                utilizando procedimentos seguros e eficientes que garantem a
                qualidade da água e a proteção da saúde.
                </p>

                <Contact />
            </div>

        </section>

    )
}