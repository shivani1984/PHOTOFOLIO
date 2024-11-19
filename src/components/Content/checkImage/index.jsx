import { Button } from "@mui/material";
import React from "react";
import "./index.css";

export default function CheckImage() {
    return (
        <>
            <div className="imageContainer">
                <div className="image">image icon</div>
                <div className="noImageFound"><h1>No image found in the album</h1></div>
                <div className="button">
                    <Button variant="outlined">
                        Add image
                    </Button>
                </div>
            </div>
        </>
    );
}
