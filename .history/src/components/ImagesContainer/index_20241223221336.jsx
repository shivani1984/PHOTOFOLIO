import React from "react";
import { useState } from "react";
import "./index.css";

export function ImagesContainer({ currentAlbumName, albumImages }) {
  const [showImageBox, setShowImageBox]=useState(true);
  const handleDelete=()=>{
    setShowImageBox(false);
  }
  return (
    <>
      { showImageBox && (<div className="images">
        {(albumImages[currentAlbumName] || []).map((titleImg, index) => (
          <div key={index} className="image-container">
            <div className="updateImg">
              <img src="https://mellow-seahorse-fc9268.netlify.app/assets/edit.png
" alt="updat"/>
            </div>
             <div className="deleteImg" onClick={handleDelete}>
              <img  src="https://mellow-seahorse-fc9268.netlify.app/assets/trash-bin.png
" alt="deleteImg"/>
            </div>
            
              <img alt={`Image of ${titleImg.title}`} className="image" />
              <span>{titleImg.title}</span>
          </div>
        ))}
      </div>)
    </>
  );
}
