"use client"
import Style from "../FlightSearch/FlightSearch.module.css"
import { useState } from "react";
const FlightSelector = () => {
    const [selected, setSelected] = useState(null);
    const options = ["Round Trip", "One Way"];
    return <div className={Style.type_section} >
        <div className={Style.types} >
            {options.map((a, index) => {
                return <div key={index} tabIndex={0} onClick={() => setSelected(index)} className={`${Style.type_item} ${selected === index ? Style.selected : ''}`} >
                    <p>{a}</p>
                </div>
            })}
        </div>
    </div>
}

export default FlightSelector