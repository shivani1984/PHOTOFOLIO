import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./index.css";

export default function ImageCard({ currentAlbumName, handleAddImages }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleImage = (e) => {
        setImage(e.target.value);
    };

    const handleClear = () => {
        setTitle("");
        setImage("");
    };

    return (
        <>
            <div className="AddImage">
                <div>
                    <h1>Add image to {currentAlbumName}</h1>
                </div>

                <div>
                    <div className="InputField">
                        <input
                            type="text"
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
                            value={image}
                            onChange={handleImage}
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
