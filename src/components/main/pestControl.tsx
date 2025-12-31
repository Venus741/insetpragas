import Contact from "../header/contactButton";

export default function PestControl() {
    return(
        <section className="flex w-full h-150 p-7">
            <div className=" flex w-400">
                <div className="bg-[url('/images/pest-control.png')] bg-contain bg-no-repeat bg-center w-full h-auto flex-1 flex items-center"></div>

            </div>
           
            <div className="w-400">
                <div className="flex w-full h-50 items-center p-3">
                    <h2 className="flex font-bold font-sans text-3xl">Focados em práticas sustentáveis de controle de pragas</h2>

                </div>

                <div className="p-3 mb-20">
                    <p>Somos focados em práticas sustentáveis de controle de pragas, utilizando métodos eficazes que reduzem o impacto ambiental e preservam a saúde das pessoas e dos animais. Atuamos com responsabilidade, tecnologia e respeito à natureza para garantir ambientes protegidos de forma segura e consciente.
                    </p>

                </div>
                
                <Contact/>
            </div>
        </section>
    )
}