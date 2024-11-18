import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import Image from "./components/Content/Image";
import AddImage from "./components/Content/AddImage";
import DialogBox from "./components/dialog-box";
import Albums from "./components/Content/Albums";

function App() {
    const [albumName, setAlbumName] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(false);
    const [albumsArray, setAlbumsArray] = useState([]);

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
        setAlbumName(""); // Clear the state, which clears the input
    };

    return (
        <div>
            <Header />
            <Title onOpen={handleAddAlbum} />
            {showDialogBox && (
                <DialogBox
                    albumName={albumName} // Pass albumName to DialogBox
                    handleClose={handleClose}
                    handleInputChange={handleInputChange}
                    handleClear={handleClear}
                    handleCreate={handleCreate} // Added handleCreate prop
                />
            )}
            <Albums albumsArray ={albumsArray}/>
            
        </div>
    );
}

export default App;
