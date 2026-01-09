import InstagramIcon from "../../../public/icons/instagram";
import WhatsappIcon from "../../../public/icons/whatsapp";

export default function Contato() {
    return(
        <section className="w-full h-20 mt-8">
            <div className="w-full text-center">
                <h2 className="text-white">Contato:</h2>

            </div>

            <div className="flex justify-center mt-3">
                <span className="flex place-content-evenly w-80">
                    <div className="flex justify-center">
                        <WhatsappIcon/>

                    </div>
                    
                    <div className="flex justify-center w-10">
                        <InstagramIcon/>

                    </div>  
                </span>

            </div>
            
        </section>
    )
}