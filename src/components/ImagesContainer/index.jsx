import React, { useState, useEffect } from "react";
import "./index.css";

export function ImagesContainer({
  currentAlbumName,
  albumImages,
  handleDeleteImageCard,
  searchQuery,
  handleUpdateCard,
}) {
  const images = albumImages[currentAlbumName] || [];
  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="images">
      {(filteredImages || []).map((titleImg, index) => (
        <div key={index} className="image-container">
          <div className="updateImg" onClick={() => handleUpdateCard(index)}>
            <img
              src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png"
              alt="update"
            />
          </div>
          <div
            className="deleteImg"
            onClick={() => handleDeleteImageCard(index)}
          >
            <img
              src="https://mellow-seahorse-fc9268.netlify.app/assets/trash-bin.png"
              alt="deleteImg"
            />
          </div>
          <span>{titleImg.title}</span>
          <img
            alt={`Image of ${titleImg.title}`}
            src={titleImg.url} // This will reflect the updated URL
            className="image"
          />
        </div>
      ))}
    </div>
  );
}
