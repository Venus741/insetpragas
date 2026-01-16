import Contact from "../header/contactButton";

export default function PestControl() {
    return(
        <section className="flex flex-col md:flex-row w-full p-7 gap-8 md:gap-16 mb-12 md:mb-20">

            <div className="w-full md:w-1/2 group overflow-hidden rounded-xl">
                <div
                    className="
                    bg-[url('/images/pest-control.png')]
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
                Focados em práticas sustentáveis de controle de pragas
                </h2>

                <p className="mb-6">
                Somos focados em práticas sustentáveis de controle de pragas,
                utilizando métodos eficazes que reduzem o impacto ambiental
                e preservam a saúde das pessoas e dos animais.
                </p>

                <Contact />
            </div>
        </section>
    )
}