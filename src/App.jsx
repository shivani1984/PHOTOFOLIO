import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import CheckImage from "./components/Content/checkImage";
import DialogBox from "./components/dialog-box";
import ImageCard from "./components/Content/ImageCard";
import Images from "./components/Images";

function App() {
    const [albumName, setAlbumName] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [albumsArray, setAlbumsArray] = useState([]);
    const [showCheckImage, setShowCheckImage] = useState(false);
    const [showTItleBar, setShowTItleBar] = useState(true);
    const [showAddImageBox, setShowAddImageBox] = useState(false);
    const [currentAlbumName, setCurrentAlbumName] = useState("");
    const [showImagesContainer, setshowImagesContainer] = useState(false);
    const [isAddingImage, setIsAddingImage] = useState(false);
    const [title, setTitle] = useState("");
    const [titleArray, setTitleArray] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [imagesArray, setImagesArray] = useState([]);

    const handleAddImages = () => {
        if (imageURL.trim() && title.trim()) {
            setImagesArray((prevImages) => [...prevImages, imageURL]);
            setTitleArray((prevTitles) => [...prevTitles, title]);
            setImageURL("");
            setTitle("");
            alert("Image and Title added successfully!");
            setshowImagesContainer(true);
            console.log("showImagesContainer is now true");


        } else {
            alert("Please enter a valid title and image URL.");
            console.log("Image or title invalid");

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
        const urlPattern = /^(https?:\/\/.*\.(png|jpg|jpeg|gif|svg|webp))$/i;

        if (urlPattern.test(url)) {
            setImageURL(url);
        } else {
            alert("Please enter a valid image URL (e.g., ending with .png, .jpg).");
        }
    };

    const handleGoBack = () => {
        setShowDialogBox(true);
        setShowCheckImage(false);
        setShowAddImageBox(false);
        setshowImagesContainer(false);
        setIsAddingImage(false);
    };

    const handleReturn = () => {
        setShowDialogBox(true);
        setShowAddImageBox(false);
        setShowCheckImage(false);
    };

    const handleOnCardClick = (albumName) => {
        setCurrentAlbumName(albumName);
        setShowCheckImage((prev) => !prev);
        setShowDialogBox((prev) => !prev);
    };

    const handleCreate = () => {
        if (albumName.trim()) {
            setAlbumsArray([...albumsArray, albumName]);
            setAlbumName("");
        } else {
            alert("Please enter a valid album name!");
        }
    };

    const handleAddAlbum = () => {
        setShowDialogBox(true);
        setShowTItleBar(false);
    };

    const handleClose = () => {
        setShowDialogBox(false);
    };

    const handleInputChange = (e) => {
        setAlbumName(e.target.value);
    };

    return (
        <div>
            <Header />
            {showTItleBar && <Title onOpen={handleAddAlbum} />}

            {showDialogBox && (
                <DialogBox
                    albumName={albumName}
                    handleClose={handleClose}
                    handleInputChange={handleInputChange}
                    handleClear={handleClear}
                    handleCreate={handleCreate}
                />
            )}

            {!showCheckImage && !isAddingImage &&
                albumsArray.map((albumName, index) => (
                    <Card
                        key={index}
                        albumName={albumName}
                        handleOnCardClick={handleOnCardClick}
                    />
                ))}

            {showCheckImage && (
                <CheckImage
                    handleAddImage={() => setShowAddImageBox(true)}
                    showAddImageBox={showAddImageBox}
                    handleReturn={handleReturn}
                />
            )}

            {showAddImageBox && (
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

            {showImagesContainer && (<Images handleGoBack={handleGoBack}
                                            title ={title}
                                            imageURL={imageURL}
             />)}
        </div>
    );
}

export default App;
