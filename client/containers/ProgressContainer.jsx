import React from "react";
import ChoreCard from "../components/ChoreCard.jsx";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";



export default function ProgressContainer(prop) {

    const choreList = useSelector(state => state.chores.choreList);

    console.log("CHORELIST HERE ", choreList)
    let choreCards = [<ChoreCard />];
    for (let i = 0; i < choreList.length; i++){
        choreCards.push(<ChoreCard title={choreList[i].title} description={choreList[i].description} due_date={choreList[i].due_date} created_date={choreList[i].created_date}/>);
    }
    

    return (
        <div className="progress-container">
            <h2>{prop.progress}</h2>
            <div className="chorecard-container">{choreCards}</div>
        </div>
    )

}