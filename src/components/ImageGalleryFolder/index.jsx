import React from "react";
import "./index.css";

export default function ImageGalleryFolder({ handleDialogBox, showDialogBox, handleAddAlbum }) {
    return (
        <>
            <div className="imageGalleryFolder">
                <h3>Your Albums</h3>
                <button 
                    className="outlineBtn" 
                    onClick={handleDialogBox}
                >
                    Cancel
                </button>
            </div>
        </>
    );
}
