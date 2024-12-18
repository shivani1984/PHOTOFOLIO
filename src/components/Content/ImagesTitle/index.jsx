import React from "react";
import Button from '@mui/material/Button';
import "./index.css";


export default function ImagesTitle({currentAlbumName, handleBack}){
    return(
    <div className="images-title">
        <span className="back" onClick={handleBack}>
            <img alt="back" src="https://mellow-seahorse-fc9268.netlify.app/assets/back.png"/>
            </span>
        <h3>Images in {currentAlbumName}</h3>

        <div className="search">
            <img alt="clear" src="https://mellow-seahorse-fc9268.netlify.app/assets/search.png
"/>
        </div>
        <button className="outlineBtn red">Cancle</button>





        


    </div>)
};