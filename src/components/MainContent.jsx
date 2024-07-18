import React from "react"
import Card from "./Card"
import Data from "../Data"

export default function MainContent() {
    const mappedData = Data.map(card => {
        return <Card key={card.id} item={card}/>
    })

    return( 
        <main>
            {mappedData}
        </main>
    )
}