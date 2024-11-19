import React from "react";
import Card from "../Card";

export default function Albums({ albumsArray, handleOnCardClick, showCheckImage }) {
    return (
        <>
            {/* Render cards only if showCheckImage is false */}
            {!showCheckImage && albumsArray.map((albumName, index) => (
                <Card key={index} albumName={albumName} handleOnCardClick={handleOnCardClick} />
            ))}
        </>
    );
}
