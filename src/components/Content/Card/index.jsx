import React from "react";
import "./index.css";

export default function Card({ albumName, handleOnCardClick }) {
    return (
        <div onClick={() => handleOnCardClick(albumName)} className="cardContainer">
            <div className="card">
                <div className="card-image">Image icon</div>
                <div className="card-name">{albumName}</div>
            </div>
        </div>
    );
}
