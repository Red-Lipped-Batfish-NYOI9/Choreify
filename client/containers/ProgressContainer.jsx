import React from "react";
import ChoreCard from "../components/ChoreCard.jsx";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";



export default function ProgressContainer(props) {
   
        return (
            <div className="progress-container">
                <h2>{props.progress}</h2>
                <div className="chorecard-container">{props.choreList}</div>
            </div>
        )
   
    

}