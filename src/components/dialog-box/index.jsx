import React from "react";
import Button from '@mui/material/Button';
import "./index.css";

const DialogBox = ({ albumName, handleInputChange, handleClose, handleClear, handleCreate }) => {
    return (
        <>
            <div className="container">
                <h1>Create an Album</h1>
                <div className="buttons">
                    <input
                        type="text"
                        placeholder="Album Name"
                        className="input"
                        autoFocus
                        value={albumName} // Controlled input
                        onChange={handleInputChange}
                    />
                    <div className="clear-button">
                        <Button variant="contained" onClick={handleClear}>
                            Clear
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" onClick={handleCreate}>
                            Create
                        </Button>
                    </div>
                </div>
            </div>
            <div className="cancelButton">
                <Button variant="outlined" onClick={handleClose}>
                    Cancel
                </Button>
            </div>
        </>
    );
};

export default DialogBox;
