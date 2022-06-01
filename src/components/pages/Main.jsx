import Header from "../header/header.component";
import Features from "../main/features/features.component";
import Benefits from "../main/benefits/benefits.components";
import Footer from "../footer/footer.component";
import Apartments from "../main/apartments/apartments.component";

const Main = () => {
    return(
        <div>
            <Header />
            <Apartments />
            <Features />
            <Benefits />
            <Footer />
        </div>
    )
}
export default Main;