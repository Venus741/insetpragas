export default function CentralCard() {
    return(
         <div className="flex justify-center bg-white">

      <section
        className="
          flex
          gap-4
          -mt-16 md:-mt-28
          bg-white
          w-full md:w-auto
          px-4 md:px-0
          py-4
          md:h-60
          justify-start md:justify-center
          overflow-x-auto md:overflow-visible
          rounded-xl
          mb-8
          shadow-xl
          scroll-smooth
        "
      >

        {/* CARD */}
        <article className="flex flex-col justify-center items-center bg-white min-w-[220px] md:w-90 px-3 text-center">
          <h1 className="font-bold">Certificados válidos</h1>
          <p className="text-sm">
            De acordo com as normas sanitárias e ambientais exigidas pelos órgãos competentes.
          </p>
        </article>

        {/* DIVISOR (DESKTOP ONLY) */}
        <div className="hidden md:flex w-1 h-full justify-center items-center">
          <div className="bg-blue-300 w-full h-30 rounded-full"></div>
        </div>

        <article className="flex flex-col justify-center items-center bg-white min-w-[220px] md:w-90 px-3 text-center">
          <h1 className="font-bold">Atendemos em toda Alagoas</h1>
          <p className="text-sm">
            Com cobertura completa, realizamos atendimentos com soluções profissionais e seguras.
          </p>
        </article>

        <div className="hidden md:flex w-1 h-full justify-center items-center">
          <div className="bg-blue-300 w-full h-30 rounded-full"></div>
        </div>

        <article className="flex flex-col justify-center items-center bg-white min-w-[220px] md:w-90 px-3 text-center">
          <h1 className="font-bold">Produto sem cheiro</h1>
          <p className="text-sm">
            Utilizamos produtos sem cheiro, garantindo um ambiente seguro e livre de odores.
          </p>
        </article>

      </section>
    </div>
    )
}