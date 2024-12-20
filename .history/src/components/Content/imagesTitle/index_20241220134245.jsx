import React from "react";
import "./index.css";

export default function ImagesTitle({
  currentAlbumName,
  handleBack,
  handleImagesContainer,
  showAddImageContainer,
}) {
  return (
    <div className="images-title">
      <span className="back" onClick={handleBack}>
        <img
          alt="back"
          src="https://mellow-seahorse-fc9268.netlify.app/assets/back.png"
        />
      </span>
      <h3>Images in {currentAlbumName}</h3>

        <div  className="search"
        onClick={}>
        <img
          alt="clear"
          src="https://mellow-seahorse-fc9268.netlify.app/assets/search.png"
        />
        </div>
 
      {/* HTML button with dynamic class and text */}
      <button
        className={showAddImageContainer ? "outlineBtn red" : "outlineBtn blue"}
        onClick={handleImagesContainer}
      >
        {showAddImageContainer ? "Cancel" : "Add image"}
      </button>
    </div>
  );
}
