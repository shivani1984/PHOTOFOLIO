import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import CheckImage from "./components/Content/checkImage";
import DialogBox from "./components/dialog-box";
import Albums from "./components/Content/Albums";

function App() {
    const [albumName, setAlbumName] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [albumsArray, setAlbumsArray] = useState([]);
    const [showCheckImage, setShowCheckImage] = useState(false);

    const handleOnCardClick = () => {
        setShowCheckImage((prev) => !prev); // Toggle the state
    };

    const handleCreate = () => {
        if (albumName.trim()) {
            setAlbumsArray([...albumsArray, albumName]);
            setAlbumName("");
            setShowDialogBox(false);
        } else {
            alert("Please enter a valid album name!");
        }
    };

    const handleAddAlbum = () => {
        setShowDialogBox(true);
    };

    const handleClose = () => {
        setShowDialogBox(false);
    };

    const handleInputChange = (e) => {
        setAlbumName(e.target.value);
    };

    const handleClear = () => {
        setAlbumName("");
    };

    return (
        <div>
            <Header />
            <Title onOpen={handleAddAlbum} />
            {showDialogBox && (
                <DialogBox
                    albumName={albumName}
                    handleClose={handleClose}
                    handleInputChange={handleInputChange}
                    handleClear={handleClear}
                    handleCreate={handleCreate}
                />
            )}
            <Albums 
                albumsArray={albumsArray} 
                handleOnCardClick={handleOnCardClick} 
            />
            {showCheckImage && <CheckImage />
                               
            }
        </div>
    );
}

export default App;
