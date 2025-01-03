import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import CheckImage from "./components/Content/checkImage";
import DialogBox from "./components/dialog-box";
import ImageCard from "./components/Content/ImageCard";
import Images from "./components/Images";
import { ImagesContainer } from "./components/ImagesContainer";
import ImagesTitle from "./components/Content/ImagesTitle";
import ImageGalleryFolder from "./components/ImageGalleryFolder";
import "./index.css";
import UpdateImage from "./components/updateImage";

function App() {
  const [albumName, setAlbumName] = useState("");
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [albumsArray, setAlbumsArray] = useState([
    "test album 1",
    "test album 2",
  ]);
  const [showCheckImage, setShowCheckImage] = useState(false);

  const [showTItleBar, setShowTItleBar] = useState(true);

  const [showAddImageContainer, setShowAddImageContainer] = useState(false);
  const [currentAlbumName, setCurrentAlbumName] = useState("");
  const [showImageBar, setShowImageBar] = useState(false);
  const [isAddingImage, setIsAddingImage] = useState(false);

  const [title, setTitle] = useState("");
  const [titleArray, setTitleArray] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [imagesArray, setImagesArray] = useState([]);
  const [showImagesContainer, setShowImagesContainer] = useState(false);
  const [showCard, setShowCard] = useState(true);
  const [showImagesTitle, setShowImagesTitle] = useState(false);
  const [albumImages, setAlbumImages] = useState({});
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [updateBox, setUpdateBox] = useState(false);
  const [updateImage, setUpdateImage] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleUpdatedValues = () => {
    setUpdateTitle("");
    setUpdateImage("");
  };

  const handleUpdatedImage = (e) => {
    const url = e.target.value;
    setUpdateImage(url);
    console.log(url);
  };

  const handleUpdatedTitle = (e) => {
    setUpdateTitle(e.target.value);
  };

  const handleClean = () => {
    setUpdateTitle("");
    setUpdateImage("");
  };

  const handleUpdateCard = (index) => {
    setUpdateBox(true);
    setShowAddImageContainer(false);

    const newValue = albumImages[currentAlbumName][index]?.title;
    const newValueImg = albumImages[currentAlbumName][index]?.imageURL;

    setUpdateTitle(newValue);
    setUpdateImage(newValueImg);
  };

  const handleDeleteImageCard = (index) => {
    setAlbumImages((prev) => ({
      ...prev,
      [currentAlbumName]: prev[currentAlbumName].filter((_, i) => i !== index),
    }));
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleImagesContainer = () => {
    setShowAddImageContainer((prev) => !prev);
  };

  const handleSearch = () => {
    setShowSearchBox((prev) => !prev);
    setSearchQuery("");
  };

  const handleDialogBox = () => {
    setShowDialogBox(false);
    setShowImageGallery(false);
    setShowTItleBar(true);
    setShowImagesContainer(false);
  };

  const handleAddImageContainer = () => {
    setShowAddImageContainer((prev) => !prev);

    setShowCard(false);
  };

  const handleBack = () => {
    setShowCard(true);
    setShowAddImageContainer(false);
    setShowImagesTitle(false);
    setShowImagesContainer(false);
    setShowTItleBar(true);
    setUpdateBox(false);
  };

  const handleAddImages = () => {
    setShowImagesContainer(true);
    setShowImagesTitle(true);
    setShowCheckImage(false);

    if (imageURL.trim() && title.trim()) {
      const newImage = { title, imageURL };

      setAlbumImages((prev) => ({
        ...prev,
        [currentAlbumName]: [...(prev[currentAlbumName] || []), newImage],
      }));

      setImageURL("");
      setTitle("");
    } else {
      alert("Please enter a valid title or image URL.");
    }
  };

  const handleClear = () => {
    setTitle("");
    setImageURL("");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleImageURL = (e) => {
    const url = e.target.value;
    setImageURL(url);
  };

  const handleGoBack = () => {
    setShowDialogBox(true);
    setShowCheckImage(false);
    setShowAddImageContainer(false);
    setShowImageBar(false);
    setIsAddingImage(false);
  };

  const handleReturn = () => {
    setShowImagesContainer(false);
    setShowDialogBox(true);
    setShowAddImageContainer(false);
    setShowCheckImage(false);
    setShowCard(true);
    setShowImageGallery(true);
  };

  const handleOnCardClick = (albumName) => {
    setShowImagesContainer(true);
    setShowAddImageContainer(false);

    setCurrentAlbumName(albumName);
    setShowCheckImage(true);
    setShowDialogBox(false);
    setShowCard(false);
    setShowTItleBar(false);
    setShowImagesContainer(false);
    setShowImageGallery(false);
  };

  const handleCreateAlbum = () => {
    if (albumName.trim()) {
      setAlbumsArray([...albumsArray, albumName]);
      setAlbumName("");
      setShowCard(true);
    } else {
      alert("Please enter a valid album name!");
    }
  };

  const handleAddAlbum = () => {
    setShowDialogBox(true);
    setShowTItleBar(false);
    setShowImageGallery(true);
  };

  const handleClose = () => {
    setShowDialogBox(false);
  };

  const handleInputChange = (e) => {
    setAlbumName(e.target.value);
  };

  return (
    <>
      <Header />
      <>
        {showTItleBar && <Title handleAddAlbum={handleAddAlbum} />}

        {showDialogBox && (
          <DialogBox
            albumName={albumName}
            handleClose={handleClose}
            handleInputChange={handleInputChange}
            handleClear={handleClear}
            handleCreate={handleCreateAlbum}
          />
        )}

        {showImageGallery && (
          <ImageGalleryFolder
            handleDialogBox={handleDialogBox}
            showDialogBox={showDialogBox}
            handleAddAlbum={handleAddAlbum}
          />
        )}

        {showCard && (
          <Card
            albumsArray={albumsArray}
            handleOnCardClick={handleOnCardClick}
          />
        )}

        {showCheckImage && (
          <CheckImage
            handleAddImageContainer={handleAddImageContainer}
            handleReturn={handleReturn}
            showAddImageContainer={showAddImageContainer}
          />
        )}

        {showAddImageContainer && (
          <ImageCard
            currentAlbumName={currentAlbumName}
            handleAddImages={handleAddImages}
            handleTitle={handleTitle}
            handleClear={handleClear}
            handleImageURL={handleImageURL}
            title={title}
            imageURL={imageURL}
          />
        )}

        {updateBox && (
          <UpdateImage
            updateTitle={updateTitle}
            updateImage={updateImage}
            handleClean={handleClean}
            handleUpdatedTitle={handleUpdatedTitle}
            handleUpdatedImage={handleUpdatedImage}
            handleUpdatedValues={handleUpdatedValues}
          />
        )}

        {showImageBar && <Images handleGoBack={handleGoBack} />}

        {showImagesTitle && (
          <ImagesTitle
            currentAlbumName={currentAlbumName}
            handleBack={handleBack}
            handleImagesContainer={handleImagesContainer}
            showAddImageContainer={showAddImageContainer}
            handleSearch={handleSearch}
            showSearchBox={showSearchBox}
            handleSearchQuery={handleSearchQuery}
          />
        )}

        {showImagesContainer && (
          <>
            <ImagesContainer
              currentAlbumName={currentAlbumName}
              albumImages={albumImages}
              handleDeleteImageCard={handleDeleteImageCard}
              searchQuery={searchQuery}
              handleUpdateCard={handleUpdateCard}
            />
          </>
        )}
      </>
    </>
  );
}

export default App;
