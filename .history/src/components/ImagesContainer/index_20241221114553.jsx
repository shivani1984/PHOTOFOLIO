import React from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  return (
    <>

      <div className="images">
        {(albumImages[currentAlbumName] || []).map((titleImg, index) => 
          <div key={index} className="image-container">
            <div>
              <img
                alt={`Image of ${titleImg.title}`}
                a
                className="image"
              />
            </div>
            <div>{titleImg.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}
