import CardIcon from "../../../public/icons/card";
import MoneyIcon from "../../../public/icons/money";
import PixIcon from "../../../public/icons/pix";

export default function Payment() {
    return(
        <section className="w-full justify-center">
            <div className="flex justify-center">
                <h3  className="text-white">Métodos de pagamento:</h3>

            </div>

            <div className="flex justify-center mt-3">
                <span className="flex place-content-evenly w-100">
                    <PixIcon/>
                    <MoneyIcon/>
                    <CardIcon/>

                </span>
            </div>
        </section>
    )
}