import React from "react";
import { Button } from "@mui/material";
import "./index.css";


export default function Images({handleGoBack}){

    return(

        <>
        <div>

        <div>
            <div className="titleBar">
            <div className="pointer" onClick ={handleGoBack}>goBack</div>


                <div>images in this album</div>
                <div>search</div>
                <div><Button variant="outlined"
                    >
                        Cancle
                    </Button></div>



            </div>
            <div></div>
        </div>

        </div>

        </>
    )
}