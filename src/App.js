import React from "react";


import data from "./data";
import Card from "./components/Card";

export default function App() {
    const cardComponent = data.map(item => {
        return <Card 
        key={item.id}
        {...item}
        />
    })

    return(
        <div className="card-view">
            {cardComponent}
        </div>
    )

 
}
