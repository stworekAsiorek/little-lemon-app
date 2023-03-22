import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import "./HomePage.css"

function HomePage(){
    return (
        <div className="home-page">
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </div>
    )
}

export default HomePage;