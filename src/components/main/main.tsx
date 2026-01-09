import CentralCard from "./centralCard";
import PestControl from "./pestControl";
import WaterTank from "./waterTank";

export default function Main() {
    return(
        <section className="w-full h-full">

        <div className="w-full h-full">
            <CentralCard/>
            <PestControl/>
            <WaterTank/>
        </div>
        </section>
    )
}