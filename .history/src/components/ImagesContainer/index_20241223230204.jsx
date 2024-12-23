import React from "react";
import { useState } from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  const [image, setImage] = useState(albumImages[currentAlbumName]);

  const handleDelete = (index) => {
    const updateImages =
    setShowImageBox(false);
  };

  return (
    <>
      <div className="images">
        {(albumImages[currentAlbumName] || []).map((titleImg, index) =>
          showImageBox && (
            <div key={index} className="image-container">
              <div className="updateImg">
                <img
                  src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png"
                  alt="update"
                />
              </div>
              <div className="deleteImg" onClick={handleDelete}>
                <img
                  src="https://mellow-seahorse-fc9268.netlify.app/assets/trash-bin.png"
                  alt="deleteImg"
                />
              </div>
              <img
                alt={`Image of ${titleImg.title}`}
                className="image"
              />
              <span>{titleImg.title}</span>
            </div>
          )
        )}
      </div>
    </>
  );
}
