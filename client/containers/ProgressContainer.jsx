import React from "react";
import ChoreCard from "../components/ChoreCard.jsx";
import "../styles.css";



export default function ProgressContainer(prop) {

    const choreCards = [<ChoreCard />];

    return (
        <div className="progress-container">
            <h2>{prop.progress}</h2>
            <div className="chorecard-container">{choreCards}</div>
        </div>
    )

}