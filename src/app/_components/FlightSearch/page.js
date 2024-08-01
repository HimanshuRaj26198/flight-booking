"use client"
import FlightSelector from "../FlightTypeSelector/page";
import Style from "./FlightSearch.module.css";
import Image from "next/image";
import FlightList from "../../../../lib/data/airports.json";
import { useRef, useState, useEffect } from "react";
const FlightSearchForm = () => {

    const [filteredFromAirports, setFilteredFromAirports] = useState([]);
    const [fromSugesstionVisible, setFromSuggestionVisible] = useState(false);
    const [filteredToAirpotts, setFilteredToAirports] = useState([]);
    const [toSuggestionVisible, setToSuggestionVisible] = useState(false);
    const fromAirport = useRef("");
    const toAirport = useRef("");
    const fromDivRef = useRef(null);
    const toDivRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the div
        const handleClickOutside = (event) => {
            if (toDivRef.current && !toDivRef.current.contains(event.target)) {
                console.log("Clicked outside to suggestion.")
                setToSuggestionVisible(false);
            }
            if (fromDivRef.current && !fromDivRef.current.contains(event.target)) {
                console.log("Clicked outside from suggestion.")
                setFromSuggestionVisible(false); // Hide the div if click is outside
            }

        };

        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFromAirportsFilter = () => {
        let filteredData = "";
        if (fromAirport.current.value != "") {
            setFromSuggestionVisible(true);
            filteredData = FlightList.filter(a => {
                if (a.name.includes(fromAirport.current.value) || a.code.includes(fromAirport.current.value) || a.country.includes(fromAirport.current.value) || a.city.includes(fromAirport.current.value)) {
                    return a;
                }
            });
        }
        setFilteredFromAirports(filteredData)
    }

    const handleToAirportChange = () => {
        let filteredData = "";
        if (toAirport.current.value != "") {
            setToSuggestionVisible(true);
            filteredData = FlightList.filter(a => {
                if (a.name.includes(toAirport.current.value) || a.code.includes(toAirport.current.value) || a.country.includes(toAirport.current.value) || a.city.includes(toAirport.current.value)) {
                    return a;
                }
            });
        }
        setFilteredToAirports(filteredData)
    }

    return <div className={Style.flight_search_container} >
        <div className={Style.left_sec} >
            <FlightSelector />
            <div className={Style.form_container} >
                <form>
                    <div className={Style.input_container} >
                        <label>From</label>
                        <input type="search" placeholder="FROM" ref={fromAirport} onChange={handleFromAirportsFilter} />
                        {fromSugesstionVisible && <div ref={fromDivRef} className={Style.suggestion_list} >
                            {fromSugesstionVisible && filteredFromAirports && <ul>
                                {filteredFromAirports.map((a, index) => {
                                    return <li key={index} onClick={() => { fromAirport.current.value = `${a.name}, ${a.state}, ${a.country}`; setFromSuggestionVisible(false) }} >  <Image alt="Flights" src="/assets/images/plane.png" height={20} width={20} />  <div className={Style.searchlist_item} >
                                        <div className={Style.location_container} >
                                            <p>{a.state}</p>
                                            <p> {a.country} </p>
                                        </div>
                                        <div className={Style.flight_container} > <p> {a.code} </p>
                                            <p className={Style.airportName} >{a.name}</p> </div>
                                    </div>  </li>
                                })}
                            </ul>
                            }
                        </div>}
                    </div>
                    <div className={Style.input_container} >
                        <label>To</label>
                        <input ref={toAirport} onChange={handleToAirportChange} type="search" placeholder="TO" />
                        {toSuggestionVisible && <div ref={toDivRef} className={Style.suggestion_list} >
                            {toSuggestionVisible && filteredToAirpotts && <ul>
                                {filteredToAirpotts.map((a, index) => {
                                    return <li key={index} onClick={() => { toAirport.current.value = `${a.name}, ${a.state}, ${a.country}`; setToSuggestionVisible(false) }} >  <Image alt="Flight" src="/assets/images/plane.png" height={20} width={20} />  <div className={Style.searchlist_item} >
                                        <div className={Style.location_container} >
                                            <p>{a.state}</p>
                                            <p> {a.country} </p>
                                        </div>
                                        <div className={Style.flight_container} > <p> {a.code} </p>
                                            <p className={Style.airportName} >{a.name}</p> </div>
                                    </div>  </li>
                                })}
                            </ul>
                            }
                        </div>}
                    </div>
                    <div className={Style.schedule_Container} >
                        <div className={Style.input_container} >
                            <label>Depart</label>
                            <input type="date" placeholder="Depart" />
                        </div>
                        <div className={Style.input_container} >
                            <label>Return</label>
                            <input type="date" placeholder="RETURN" />
                        </div>
                    </div>
                    <div className={Style.option_container} >
                        <div className={Style.input_container} >
                            <label>Adult</label>
                            <select>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                            </select>
                        </div>
                        <div className={Style.input_container} >
                            <label>Child</label>
                            <select>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                                <option value="6" >6</option>
                                <option value="7" >7</option>
                                <option value="8" >8</option>
                            </select>
                        </div>
                        <div className={Style.input_container} >
                            <label>Infant</label>
                            <select>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                            </select>
                        </div>
                        <div className={Style.input_container} >
                            <label>Cabin/Class</label>
                            <select>
                                <option value="Economy" >Economy</option>
                                <option value="Premium Economy" >Premium Economy</option>
                                <option value="Business" >Business</option>
                                <option value="First" >First</option>
                            </select>
                        </div>
                    </div>
                    <div className={Style.action_container} >
                        <button>Search Flights</button>
                    </div>
                </form>
            </div>
        </div>
        <div className={Style.right_sec} >
            <div className={Style.marketing_banner} >
                <Image alt="Flights" className={Style.offer_bg} src="/assets/images/Offer_bg.png" fill={true} />
                <h2>Up to 40% discount offers</h2>
                <p>Cheapest flights online</p>
                <p> Starting at $53 </p>
                <h3>Book Online Now</h3>
                <p> Need Help Booking ? </p>
                <p>Call Experts 24x7x365</p>
                <p>+1-2658548569</p>
            </div>
        </div>
    </div>

}


export default FlightSearchForm;