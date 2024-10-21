import React from "react";


const FuntionCard = ({n, id}) => {

    
    return (
        <div className="Card">
            <span  key={id}>{n}</span>
            
        </div>
    )
}

export default FuntionCard