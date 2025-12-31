import Contact from "../header/contactButton";

export default function PestControl() {
    return(
        <section className="flex w-full h-150 p-7">
            <div className="flex w-400">
                <div className="bg-[url('/images/water-tank-clean.png')] bg-contain bg-no-repeat bg-center w-full h-auto flex-1 flex items-center"></div>

            </div>
           
            <div className="w-400">
                <div className="flex w-full h-50 items-center p-3">
                    <h2 className="flex font-bold text-3xl">Serviço especializado de limpeza de caixas d’água e cisternas</h2>

                </div>

                <div className="p-3 mb-20">
                    <p>Somos especializados na limpeza de caixas d’água e cisternas, utilizando procedimentos seguros e eficientes que garantem a qualidade da água e a proteção da saúde. Atuamos com responsabilidade, cuidado e técnicas adequadas para manter seu abastecimento limpo, seguro e confiável.
                    </p>

                </div>

                <Contact/>
            </div>
        </section>
    )
}