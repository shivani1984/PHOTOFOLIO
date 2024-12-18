import React from "react";
import "./index.css";

export default function Title({ handleAddAlbum}) {
    return (
        <>
            <div className="addAlbum">
                <h3>Yours albums</h3>
                <button className="outlineBtn " onClick={handleAddAlbum}>  Add album</button>
                
            </div>
        </>
    );
}
