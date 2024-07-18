import React from "react"


export default function Card(props) {
  
    return (
        <div className="card_container">
            <div className="card_flex">
                <div className="card_container">
                    <figure><img src={`/images/${props.item.img}`} alt="mount fuji"/></figure>
                </div>
                <div className="info_container">
                    <div className="info_heading">
                        <h3>{props.item.country}</h3>
                        <a href={`${props.item.googleMapURL}`} target="_blank">View on Google Maps</a>
                    </div>
                    <div className="info_content">
                        <h2>{props.item.placeName}</h2>
                        <h4>{props.item.startDate} - {props.item.endDate}</h4>
                        <p>{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}