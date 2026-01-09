import React from "react";
import '../styles/sass/index.sass'

const BandsList = ({ bands }) => (
    <ul className={bands.length > 10 ? "domingoLineUp" : "sabadoLineUp" }>
        {bands.map((band, index) => (
        <li key={index}>
            <p>{band}</p>
        </li>
        ))}
    </ul>
);

export default BandsList;