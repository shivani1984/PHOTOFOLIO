import React from "react";
import Button from '@mui/material/Button';
import "./index.css";
import { useState } from "react";
import App from "../../../App";

export default function ImageCard({currentAlbumName}){

    const [title,setTItle]= useState("");
    const [image,setimage]= useState("");

    const handleTitle=(e)=>{
        setTItle(e.target.value)
    }

    const handleImage=(e)=>{
        setimage(e.target.value)
    }

    const handleClear =(e)=>{
        setTItle("");
        setimage("");

    }



    return(<>

    <div className="AddImage">
        <div><h1>Add image to {currentAlbumName}</h1></div>

        <div >
        
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
        <div className="btns ">
            <div>
            <Button variant="contained" 
                    onClick={handleClear}
             >
                Clear
                        </Button>
            </div>
            <div>
            <Button variant="contained">
                            Add
                        </Button>
            </div>
        </div>




    </div>
    
    
    </>

    )
};