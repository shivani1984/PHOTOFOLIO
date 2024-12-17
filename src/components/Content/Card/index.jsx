import React from "react";
import "./index.css";

export default function Card({ albumsArray, handleOnCardClick }) {
    return (
        <>
        <div className="cardContainer">
            {albumsArray.map((albumName, index)=>(
            <div className="card" onClick={() => handleOnCardClick(albumName)}>
                <img
                src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png"
                alt="img"
                />
                <span>{albumName}</span>
                </div>))}
        </div>
        </>
    );
}
