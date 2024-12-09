import React from "react";
import "./index.css";

export function ImagesContainer({ title, image }) {
    return (
        <>
        <div className="images">
            <div>
                <img alt={`image of ${title}`} src={image} />
            </div>
            <div>{title}</div>
        </div>
        </>
    );
}
