import React from "react";
import "./index.css";

export default function Title({ onOpen }) {
    return (
        <>
            <div className="addAlbum">
                <h3>Yours albums</h3>
                <button className="outlineBtn" onClick={onOpen}>Add album</button>
                
            </div>
        </>
    );
}
