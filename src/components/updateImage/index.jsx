import React from "react";

export default function UpdateImage({
  updateTitle,
  updateImage,
  handleClean,
  handleUpdatedTitle,
  handleUpdatedImage,
  handleUpdatedValues,
}) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
  };

  return (
    <div className="AddImage">
      <span>
        <h1>Add image to </h1>
      </span>

      {/* Attach handleSubmit to the form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="input"
          value={updateTitle}
          onChange={handleUpdatedTitle}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="input"
          value={updateImage}
          onChange={handleUpdatedImage}
        />

        <div className="btns">
          <button
            type="button" // Prevent form submission
            className="red-btn solid-btn"
            onClick={handleClean}
          >
            Clear
          </button>
          <button
            type="button" // Prevent form submission
            className="blue-btn solid-btn"
            onClick={() => handleUpdatedValues()} 

          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
