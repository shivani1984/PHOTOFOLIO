import React from "react";
import Button from "@mui/material/Button";
import "./index.css";

export default function Title({ onOpen }) {
    return (
        <>
            <div className="addAlbum">
                <h1>Yours Albums</h1>
                <div className="button">
                    <Button variant="outlined" onClick={onOpen}>
                        Add album
                    </Button>
                </div>
            </div>
        </>
    );
}
