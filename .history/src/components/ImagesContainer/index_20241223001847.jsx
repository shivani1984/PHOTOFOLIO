import React from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  return (
    <>
      <div className="images">
        {(albumImages[currentAlbumName] || []).map((titleImg, index) => (
          <div key={index} className="image-container">
            <div className="updateImg">
              <img src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png
" alt="updat"/>
            </div>
            <div>
              <img  src="alt="deleteImg"/>
            </div>
            <div>
              <img alt={`Image of ${titleImg.title}`} className="image" />
              <span>{titleImg.title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
