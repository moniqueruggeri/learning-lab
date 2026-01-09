import React from "react";
import { Link } from "react-router-dom";


const Button = ({ text, onclick, link, className, type = 'button'}) => {
    if (link) {
        const linkClassName = className ? className : ''
        return (
            <Link to={link} className={linkClassName}>
                {text}
            </Link>
            )
    }
    
    return (
        <button className={className} onClick={onclick} type={type}>
            {text}
        </button>
    )
}

export default Button