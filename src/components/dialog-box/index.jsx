import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./index.css";

export default function DialogBox({onClose}) {
    const [albumName, setAlbumName] = useState("");
    const [isVisible, setIsVisible] =useState("true");

    
    const handleClear = () => {
        setAlbumName("");
    };

    const handleInputChange = (e) => {
        setAlbumName(e.target.value);
    };

    return (
        <>
            
            <div>
            <div className="container">
                <h1>Create an Album</h1>
                <div className="buttons">
                    <input
                        type="text"
                        placeholder="Album Name"
                        className="input"
                        autoFocus
                        value={albumName}
                        onChange={handleInputChange}
                    />
                    <Button variant="contained" onClick={handleClear}>Clear</Button>
                    <Button variant="contained">Create</Button>
                </div>
            </div>
            <div className="cancelButton">
                <Button variant="outlined" onClick={onClose} >Cancel</Button>
            </div>
            </div>
            
        </>
    );
}
