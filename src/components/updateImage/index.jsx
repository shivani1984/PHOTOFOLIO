import React from "react";

export default function UpdateImage({
  updateValue,
  updateImage,
  handleClean,
  handleUpdatedTitle,
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
          value={updateValue}
          onChange={handleUpdatedTitle}
        />
        <input
          type="url"
          placeholder="Image URL"
          className="input"
          value={updateImage}
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
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
