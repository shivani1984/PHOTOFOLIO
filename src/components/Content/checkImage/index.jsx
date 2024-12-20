import React from "react";
import "./index.css";
import App from "../../../App";

export default function CheckImage({
  handleAddImageContainer,
  showAddImageContainer,
  handleReturn,
}) {
  return (
    <>
      <div className="imageContainer">
        <span>
          <img
            src="https://mellow-seahorse-fc9268.netlify.app/assets/back.png"
            alt="back"
            onClick={handleReturn}
          />
        </span>
        <div className="noImageFound">
          <h1>No image found in the album</h1>
        </div>
        <button
          onClick={handleAddImageContainer}
          className={showAddImageContainer ? "outlineBtn red" : "outlineBtn"}
        >
          {showAddImageContainer ? "Cancel" : "Add Image"}
        </button>
      </div>
    </>
  );
}
