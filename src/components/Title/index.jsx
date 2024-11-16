import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; 
import "./index.css";
import DialogBox from "../dialog-box";


export default function Title(){

    const [showDialogBox, setShowDialogBox] = useState(false);

    const handleAddAlbum =()=>{
        setShowDialogBox(true);}

    const handleClose =()=>{
        setShowDialogBox(false);

    }

    

    return(
        <>
        <div className="addAlbum">
        <h1>Yours Albums</h1>
        <div className="button"><Button variant="outlined" onClick={handleAddAlbum} >Add album</Button></div>
        </div>

        {showDialogBox && <DialogBox onClose ={handleClose}/>}
        
        
        </>
    )
}