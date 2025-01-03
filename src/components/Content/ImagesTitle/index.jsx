import React from "react";
import "./index.css";

export default function ImagesTitle({
  currentAlbumName,
  handleBack,
  handleImagesContainer,
  showAddImageContainer,
  handleSearch,
  showSearchBox,
  handleSearchQuery,
  searchQuery
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

      <div className="searchContainer">
        {showSearchBox && (
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange= {(e) =>{handleSearchQuery(e);
            console.log("searchQuery :", e.target.value)
          }}
            
          />
        )}

        {showSearchBox ? (
          <div>
            <img
              className="searchCancel"
              onClick={handleSearch}
              src="https://mellow-seahorse-fc9268.netlify.app/assets/clear.png"
            />
          </div>
        ) : (
          <div className="search" onClick={handleSearch}>
            <img
              alt="clear"
              src="https://mellow-seahorse-fc9268.netlify.app/assets/search.png"
            />
          </div>
        )}
      </div>

      <button
        className={showAddImageContainer ? "outlineBtn red" : "outlineBtn blue"}
        onClick={handleImagesContainer}
      >
        {showAddImageContainer ? "Cancel" : "Add image"}
      </button>
    </div>
  );
}
