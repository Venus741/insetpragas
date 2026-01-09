import Contato from "./contato";
import InsetpragasLogo from "./logo";
import Payment from "./payment";

export default function Footer() {
    return(
        <section className="w-full h-90 bg-footer justify-center items-center">
            <InsetpragasLogo/>
            <Contato/>
            <Payment/>
        </section>
    )
}