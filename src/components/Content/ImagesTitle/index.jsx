import React from "react";
import Button from '@mui/material/Button';
import "./index.css";


export default function ImagesTitle({currentAlbumName, handleBack}){
    return(
    <div className="images-title">
        <div className="back" onClick={handleBack}>back</div>
        <div>Images in {currentAlbumName}</div>

        <div>Search</div>





        <div><Button variant="outlined">
                    Cancel
                </Button></div>


    </div>)
};