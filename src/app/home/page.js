import FlightSearchForm from "../_components/FlightSearch/page";
import Style from "./Home.module.css";
import Image from "next/image";
const HomePage = () => {
    return <div className={Style.home_container} >
        <div className={Style.main_header} >
            <Image alt="CheapTrips hero banner" className={Style.bg_img} fill={true} src="/assets/images/airplane-wing-clouds-from-window-view.jpg" />
            <div className={Style.flight_search_container} >
                <FlightSearchForm />
            </div>
        </div>
        <div className={Style.second_section} >
            <div className={Style.features_section} >
                <div className={Style.icon_container} >
                    <Image alt="CheapTrips provide easy booking." src="/assets/images/booking.png" width={60} height={60} />
                    <h3>Easy Booking</h3>
                </div>
                <div className={Style.icon_container} >
                    <Image alt="CheapTrips provide free re-schedule." src="/assets/images/schedule.png" width={60} height={60} />
                    <h3>Free Rescheduling</h3>
                </div>
                <div className={Style.icon_container} >
                    <Image alt="CheapTrips provide guaranteed refund." src="/assets/images/refund.png" width={60} height={60} />
                    <h3>Guaranteed Refund</h3>
                </div>
            </div>
        </div>
        <div className={Style.offer_call_section} >
            <div className={Style.call_to_offer} >
                <Image alt="CheapTrips Main Banner" className={Style.offer_bg} src="/assets/images/banner_ad1.jpg" fill={true} />
                <div className={Style.offer_call} >
                    <h2> Get Best Deals for Flight Tickets </h2>
                    <span> Call our travel experts </span>
                    <span> Call :<a href="tel:+91-6207891726" >+91-6207891726</a> </span>
                    <span>Or</span>
                    <span> Get a Call </span>
                </div>
            </div>
        </div>

        <div className={Style.second_section} >
            <div className={Style.review_section} >
                <h2>Custome Reviews</h2>
                <div className={Style.reviews_container} >
                    <div className={Style.person_review} >
                        <Image alt="Customr Revew by James Johnson" className={Style.person_image} src="/assets/images/person1.jpg" width={50} height={50} />
                        <span>James Johnson</span>
                        <div className={Style.person_comment} >
                            <p>I recently used CheapTrips to book a flight from Los Angeles to Chicago and couldn't be happier! The site is super easy to use and had the lowest prices by far. No hidden fees, and my e-ticket arrived instantly. Fantastic customer service too. I'll definitely be using CheapTrips for all my future travel!</p>
                        </div>
                    </div>
                    <div className={Style.person_review} >
                        <Image alt="Customer Review by Michael Brown." className={Style.person_image} src="/assets/images/person2.jpg" width={50} height={50} />
                        <span>Michael Brown</span>
                        <div className={Style.person_comment} >
                            <p>I booked a flight from San Francisco to New York with CheapTrips and saved a ton! The website is super easy to use, and the prices are unbeatable. No hidden fees, and I got my e-ticket instantly. Great customer service too. Highly recommend CheapTrips for the cheapest flight tickets in the USA!</p>
                        </div>
                    </div>
                    <div className={Style.person_review} >
                        <Image alt="Customer Review by William Davis." className={Style.person_image} src="/assets/images/person3.jpg" width={50} height={50} />
                        <span>William Davis</span>
                        <div className={Style.person_comment} >
                            <p>I recently booked a flight from Chicago to Miami using CheapTrips and saved a ton! The website is easy to navigate, and I found the lowest prices anywhere. No hidden fees, and I got my e-ticket instantly. Their customer service was fantastic when I had a question. Highly recommend CheapTrips for the cheapest flight tickets in the USA!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default HomePage