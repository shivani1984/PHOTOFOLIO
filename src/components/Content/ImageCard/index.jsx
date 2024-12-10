import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./index.css";

export default function ImageCard({ currentAlbumName, handleAddImages, handleTitle, title, handleImageURL, imageURL, handleClear }) {





    return (
        <>
            <div className="AddImage">
                <div>
                    <h1>Add image to {currentAlbumName}</h1>
                </div>

                <div>
                    <div className="InputField">
                        <input
                            type="url"
                            placeholder="Title"
                            className="input"
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>
                    <div className="InputField">
                        <input
                            type="url"
                            placeholder="Image URL"
                            className="input"
                            value={imageURL}
                            onChange={handleImageURL}
                        />
                    </div>
                </div>

                <div className="btns">
                    <div>
                        <Button variant="contained" onClick={handleClear}>
                            Clear
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" onClick={handleAddImages}>
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
