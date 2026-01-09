import Contact from "./contactButton";

export default function Header() {
    return(
        <div className="flex flex-col w-full h-171">
            <div className="bg-[url('/images/bg-banner.png')] bg-cover w-full h-auto flex-1 flex items-center">    
                
                <div className="relative text-start w-200 h-flex m-12">
                    <h1 className="text-white font-bold font-anton text-6xl text-shadow-sm">Prevenção, Proteção & Controle de Pragas</h1>
                    <br />

                    <h2 className="text-2xl text-white font-impact">Sua tranquilidade começa com um ambiente livre de pragas</h2>
                    <br />
                    
                    <Contact/>
                </div>
            </div>


        </div>
    )
}