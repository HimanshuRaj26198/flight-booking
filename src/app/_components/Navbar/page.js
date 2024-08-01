import Image from "next/image";
import Style from "./Navbar.module.css";
const Navbar = () => {
    return <div className={Style.navbar} >
        <div className={Style.top_sec} >
            <div className={Style.call_us} >
                <h2>Book on call : <a href="tel:+91-6207891726" >+91-6207891726</a> </h2>
            </div>
        </div>
        <div className={Style.mid_sec} >
            <Image width="150" height="60" src="/assets/images/white_logo.png" />
        </div>
        <div className={Style.bottom_sec} >
            <ul className={Style.navmenus} >
                <li>Flights</li>
                <li>Hotels</li>
                <li>Cars</li>
                <li>Insurance</li>
                <li>Trip Assistance</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
}

export default Navbar;