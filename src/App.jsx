import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import CheckImage from "./components/Content/checkImage";
import DialogBox from "./components/dialog-box";
import ImageCard from "./components/Content/ImageCard";
import Images from "./components/Images";
import { ImagesContainer } from "./components/ImagesContainer";

function App() {
    const [albumName, setAlbumName] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [albumsArray, setAlbumsArray] = useState([]);
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
    const [showImagesContainer, setShowImagesContainer]=useState(false);
    const [cardImageArray, setCardImageArray] = useState([]);
    const [showCard, setShowCard ] = useState(false);

    // Effect to log updates to cardImageArray
    useEffect(() => {
        console.log("Updated cardImageArray:", cardImageArray);
    }, [cardImageArray]);

    const handleAddImageContainer = () => {
        setShowAddImageContainer(true);
        setShowCheckImage(false);
        setShowCard(false);

    };

    const handleAddImages = () => {
        setShowImagesContainer(true); 
        console.log("show add image container");


        if (imageURL.trim() && title.trim()) {
            const newCardImageArray = { title, imageURL };
            setCardImageArray((prev) => [...prev, newCardImageArray]);
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
        // Simply set the image URL without any validation
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

    };

    const handleOnCardClick = (albumName) => {
        console.log('Album clicked:', albumName);
        if (cardImageArray.length > 0) {
            setShowImagesContainer(true);
        }
        setCurrentAlbumName(albumName);
        setShowCheckImage(true);
        setShowDialogBox(false);
        setShowCard(false);

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
                    handleCreate={handleCreateAlbum}
                />
            )}

            {showCard && (
                albumsArray.map((albumName, index) => (
                    <Card
                        key={index}
                        albumName={albumName}
                        handleOnCardClick={handleOnCardClick}
                    />)
                ))}

            {showCheckImage && (
                <CheckImage
                    handleAddImageContainer={handleAddImageContainer}
                    handleReturn={handleReturn}
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

            {showImageBar && (
                <Images
                    handleGoBack={handleGoBack}
                />
            )}

{showImagesContainer && cardImageArray.map((imageTitle, index) => (
    <ImagesContainer
        key={index}
        title={imageTitle.title}
        image={imageTitle.imageURL}
    />
))}

        </div>
    );
}

export default App;
