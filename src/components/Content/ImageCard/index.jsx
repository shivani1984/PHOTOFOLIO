import React from "react";
import "./index.css";

export default function ImageCard({
    currentAlbumName,
    handleAddImages,
    handleTitle,
    title,
    handleImageURL,
    imageURL,
    handleClear,
}) {
    // Prevent default form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
    };

    return (
        <div className="AddImage">
            <span>
                <h1>Add image to {currentAlbumName}</h1>
            </span>

            {/* Attach handleSubmit to the form */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="input"
                    value={title}
                    onChange={handleTitle}
                />
                <input
                    type="url"
                    placeholder="Image URL"
                    className="input"
                    value={imageURL}
                    onChange={handleImageURL}
                />

                <div className="btns">
                    <button
                        type="button" // Prevent form submission
                        onClick={handleClear}
                        className="red-btn solid-btn"
                    >
                        Clear
                    </button>
                    <button
                        type="button" // Prevent form submission
                        onClick={handleAddImages}
                        className="blue-btn solid-btn"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}
