import React from "react";
import "./index.css";

export default function Card({ albumName }) {
    return (
        <>
            <div className="cardContainer">
                <div className="card">
                    <div className="card-image">
                        Image icon
                    </div>

                    <div className="card-name">
                        {albumName}
                    </div>
                </div>
            </div>
        </>
    );
}
