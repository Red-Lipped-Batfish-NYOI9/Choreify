import React from "react";
import CreateChore from '../components/CreateChore.jsx'
import ChoreCard from '../components/ChoreCard.jsx'

export default function MainContainer () {
    return (
        <div>
            <h1>Choreify!</h1>
            <CreateChore />
            <ChoreCard />
        </div>
    )
}