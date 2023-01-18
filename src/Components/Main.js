import React from "react";
import Location from '../Images/location.png'

export default function Main(props) {
    return(
        <div className="main">
             <div className="main--logo">
                <img className="card1" src={`../Images/${props.imageUrl}`} alt="" />
            </div>
            <div className="main2">
           
           
            <div className="location">
                <img className="location--logo" src={Location} alt="" />
                <h2 className="location--header2">{props.location}</h2>
                <a className="main--a" href={props.googleMapsUrl}>View on Google Maps</a>
                
            </div>
            <h1 className="location--header1">{props.title}</h1>
            <div className="date">
                <p className="start--date">{props.startDate} - </p>
                <p className="end--date">{props.endDate}</p>
            </div>
            <div className="main--main">
                <p className="main--description">{props.description}</p>
            </div>
            </div>
        </div>
    )
}