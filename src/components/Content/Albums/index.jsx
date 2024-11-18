import React from "react";
import Card from "../Card";

export default function Albums({ albumsArray }) {
    return (
        <>
            {albumsArray.map((albumName, index) => (
                <Card key={index} albumName={albumName} />
            ))}
        </>
    );
}
