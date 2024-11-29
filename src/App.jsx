import React, { useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Content/Card";
import CheckImage from "./components/Content/checkImage";
import DialogBox from "./components/dialog-box";
import ImageCard from "./components/Content/ImageCard";

function App() {
    const [albumName, setAlbumName] = useState("");
    const [showDialogBox, setShowDialogBox] = useState(false);
    const[albumsArray, setAlbumsArray] = useState([]);
    const [showCheckImage, setShowCheckImage] = useState(false);
    const [showTItleBar, setShowTItleBar] = useState(true);
    const [showAddImageBox,setShowAddImageBox]=useState(false);
    const [currentAlbumName, setCurrentAlbumName] = useState("");

    const handleAddImage =()=>{
        setShowAddImageBox((prev)=> !prev);
    }


    

    const handleOnCardClick = (albumName) => {
        setCurrentAlbumName(albumName)
        setShowCheckImage((prev) => !prev); // Toggle the state
        setShowDialogBox((prev) => !prev); // Toggle the state


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

    const handleClear = () => {
        setAlbumName("");
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
            {!showCheckImage &&
                albumsArray.map((albumName, index) => (
                    <Card
                        key={index}
                        albumName={albumName}
                        handleOnCardClick={handleOnCardClick}
                    />
                ))}

            {/* Render CheckImage Component */}
            {showCheckImage && <CheckImage
                             handleAddImage ={handleAddImage}
                             showAddImageBox = {showAddImageBox}
             />}

            

            {showAddImageBox && (<ImageCard
                                 currentAlbumName={currentAlbumName}
                                    
            />)}
        </div>
    );
}

export default App