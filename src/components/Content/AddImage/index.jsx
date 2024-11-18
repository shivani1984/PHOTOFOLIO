import React from "react";
import Button from '@mui/material/Button';
import "./index.css";

export default function AddImage() {
  return (
    <>
      <div className="imgContainer">
        <div className="imgBox">
        <div>
          <h1>Add image to Vijaya</h1>
        </div>

        <div className="title">
          <input
            type="text"
            placeholder="Title"
            className="input"

            autoFocus
          />
        </div>

        <div className="title">
          <input
            type="text"
            placeholder="Image URL"
            className="input"

          />
        </div>

        <div>
          <div className="title">
            <Button variant="contained">Clear</Button>
          </div>
          <div>
            <Button variant="contained">Add</Button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
