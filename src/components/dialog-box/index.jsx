import React from "react";
import "./index.css";

const DialogBox = ({ albumName, handleInputChange, handleClose, handleClear, handleCreate }) => {
    return (
        <>
            <div className="container">
                <span>Create an Album</span>
                <div className="buttons">
                    
                    <input
                        type="text"
                        placeholder="Album Name"
                        className="input"
                        autoFocus
                        value={albumName} // Controlled input
                        onChange={handleInputChange} // Handles input changes
                    />
                    <div>
                        <button className="red-btn solid-btn" onClick={handleClear}>
                            Clear
                        </button>
                    </div>
                    <div>
                        <button className="blue-btn solid-btn" onClick={handleCreate}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
            <div className="cancelButton">
                <button className="button cancel-button" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </>
    );
};

export default DialogBox;
