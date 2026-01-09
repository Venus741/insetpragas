export default function CentralCard() {
    return(
        <div className="flex justify-center bg-white">
            <section className="flex -mt-28 bg-white w-auto h-60 justify-center text-center rounded-xl mb-8 shadow-xl">

                <article className="flex flex-col justify-center items-center bg-white w-90 rounded-l-xl px-3">
                    <h1 className="font-bold">Certificados válidos</h1>
                    <p>De acordo com as normas sanitárias e ambientais exigidas pelos órgãos competentes.</p>
                </article>

                <article className="flex w-1 shadow-xl h-full justify-center items-center">
                    <div className="bg-blue-300 w-full h-30 rounded-full inset-shadow-sm inset-shadow-white"></div>
                </article>

                <article className="flex flex-col justify-center items-center bg-white w-90 px-3">
                    <h1 className="font-bold">Atendemos em toda Alagoas</h1>
                    <p>Com cobertura completa, realizamos atendimentos, com soluções profissionais e seguras onde você estiver.</p>
                </article>

                <article className="flex w-1 shadow-xl h-full justify-center items-center">
                    <div className="bg-blue-300 w-full h-30 rounded-full inset-shadow-sm inset-shadow-white"></div>
                </article>

                <article className="flex flex-col justify-center items-center bg-white w-90 rounded-r-xl px-3">
                    <h1 className="font-bold">Produto sem cheiro</h1>
                    <p>Utilizamos produtos sem cheiro, garantindo um ambiente seguro e livre de odores após a dedetização.</p>
                </article>
            </section>
        </div>
    )
}