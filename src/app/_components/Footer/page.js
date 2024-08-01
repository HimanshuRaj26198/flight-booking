import Style from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
    return <>
        <div className={Style.footer_container} >
            <footer className={Style.footer} >
                <div className={Style.left_sec} >
                    <span>Travel with CheapTrips</span>
                    <span>About CheapTrips</span>
                    <span>Legal</span>
                    <span>Travel Tools</span>
                    <span>Connect with CheapTrips</span>
                    <span>CheapTrips Reviews</span>
                </div>
                <div className={Style.right_sec} >
                    <div className={Style.additional_links} >
                        <span>Flights</span>
                        <span>Hotels</span>
                        <span>Cars</span>
                        <span>Go India</span>
                    </div>
                    <div className={Style.additional_links} >
                        <span>About Us</span>
                        <span>Testimonials</span>
                        <span>Customer Feedback</span>
                        <span>Sitemap</span>
                    </div>
                    <div className={Style.additional_links} >
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                        <span>Accessibility Policy</span>
                        <span>Taxes and Fees</span>
                    </div>
                    <div className={Style.additional_links} >
                        <span>Airline Baggage Policy</span>
                        <span>Online Check-In</span>
                        <span>Airline Telephone Numbers</span>
                        <span>World Airlines</span>
                        <span>Contact Us</span>
                        <span>FAQs</span>
                    </div>
                    <div className={Style.additional_links} >
                        <span><Image alt="CheapTrips Facebook" src="/assets/images/facebook (1).png" width={25} height={25} /></span>
                        <span><Image alt="CheapTrips LinkedIn" src="/assets/images/linkedin.png" width={25} height={25} /></span>
                        <span><Image alt="CheapTrips Twitter" src="/assets/images/twitter.png" width={25} height={25} /></span>
                        <span><Image alt="CheapTrips Instagram" src="/assets/images/instagram.png" width={25} height={25} /></span>
                    </div>
                </div>
            </footer>
        </div>
        <div className={Style.copyright} >
            <span>Copyright © 2007 - 2024 CheapTrips.com All rights reserved.</span>
        </div>
    </>
}

export default Footer;