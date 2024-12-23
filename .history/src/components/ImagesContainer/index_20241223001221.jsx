import React from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  return (
    <>
      <div className="images">
        {(albumImages[currentAlbumName] || []).map((titleImg, index) => (
          <div key={index} className="image-container">
            <div>
              
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
