import React from "react";
import Button from "./Button";

const Card = ({ icon, text, title, link}) => {
const iconClass = title === "Camping" ? "material-symbols-outlined" : "material-icons"

    return (
        <div className={`card card${title}`}>
            <div className="titles">
                <i className={iconClass}>{icon}</i>
                 <h2>{title}</h2>
            </div>
            <p className="textParagraph">{text}</p>
            <Button text="Ingresso" href="/Ingresso" className="button"/>
        </div>
    )
}

export default Card