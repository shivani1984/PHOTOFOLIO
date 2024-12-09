import { Button } from "@mui/material";
import React from "react";
import "./index.css";
import App from "../../../App";

export default function CheckImage({handleAddImageContainer, showAddImageContainer,handleReturn }) {
    return (
        <>
            <div className="imageContainer">
                <div className="image" onClick={handleReturn}> goBack</div>
                <div className="noImageFound"><h1>No image found in the album</h1></div>
                <div className="button">
                    <Button variant="outlined"
                      onClick={handleAddImageContainer}
                    >
                        {showAddImageContainer ? "Cancel" : "Add Image"}
                    </Button>
                </div>
            </div>
        </>
    );
}
