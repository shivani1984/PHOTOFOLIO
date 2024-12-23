import React, { useState, useEffect } from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  const [image, setImage] = useState([]);

  // Update the image state whenever currentAlbumName changes
  useEffect(() => {
    setImage(albumImages[currentAlbumName] || []);
  }, [currentAlbumName, albumImages]);

  const handleDelete = (index) => {
    const updateImages = [...image]; // Create a copy of the image array
    updateImages.splice(index, 1); // Remove the image at the given index
    setImage(updateImages); // Update the state with the new array
  };

  return (
    <div className="images">
      {(image || []).map((titleImg, index) => (
        <div key={index} className="image-container">
          <div className="updateImg">
            <img
              src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png"
              alt="update"
            />
          </div>
          <div className="deleteImg" onClick={() => handleDelete(index)}>
            <img
              src="https://mellow-seahorse-fc9268.netlify.app/assets/trash-bin.png"
              alt="deleteImg"
            />
          </div>
          <img
            alt={`Image of ${titleImg.title}`}
            src={titleImg.url} // Assuming each image object has a URL property
            className="image"
          />
          <span>{titleImg.title}</span>
        </div>
      ))}
    </div>
  );
}
