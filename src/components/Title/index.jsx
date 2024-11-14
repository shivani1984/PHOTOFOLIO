import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; 
import "./index.css";

export default function Title(){
    return(
        <>
        <div className="addAlbum">
        <h1>Yours Albums</h1>
        <div className="button"><Button variant="outlined">Add album</Button></div>
        </div>
        
        
        </>
    )
}