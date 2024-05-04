import React, { useState } from 'react';
import "./Welcome.css";

function Welcome() {
    const [showInput, setShowInput] = useState(false);
    const [titleNote, setTitleNote] = useState("");
    const [allGroup, setAllGroup] = useState([]);
    const [selectedColor, setSelectedColor] = useState("green"); // Default color

    function clickHandler() {
        setShowInput(!showInput);
    }

    function titleHandler(e) {
        setTitleNote(e.target.value);
    }

    function addData() {
        // Splitting the title into words
        const titleWords = titleNote.split(" ");
        // Getting the initials
        let initials = "";
        if (titleWords.length > 0) {
            // If the first word is longer than one letter, take the first two letters
            if (titleWords[0].length > 1) {
                initials = titleWords[0].slice(0, 2).toUpperCase();
            } else {
                // Otherwise, take the first letter of each word
                initials = titleWords.map(word => word[0].toUpperCase()).join("");
            }
        }

        // Creating the note object
        const newNote = {
            title: titleNote,
            color: selectedColor,
            initials: initials
        };

        // Updating the state
        setAllGroup(prevState => [...prevState, newNote]);
        setTitleNote("");
    }

    function changeColor(color) {
        setSelectedColor(color);
    }

    return (
        <>
            <div className='welcome-page'>
                <h1 className='heading'>Pocket Notes</h1>
                <div>
                    {allGroup.map((item, index) => (
                        <div
                            key={index}
                            style={{ border: `5px solid ${item.color}`, margin: "5px", padding: "8px", paddingRight: "10px" }}
                        >
                            <span style={{ backgroundColor: item.color, margin: "3px", padding: "5px", borderRadius: "50%" }} >{item.initials}</span>{item.title}
                        </div>
                    ))}
                </div>
                <button onClick={clickHandler} className='add-btn'>Add</button>
            </div>
            <div className='title-input' style={{ display: showInput ? "block" : "none" }}>
                {showInput && (
                    <div>
                        <label htmlFor="">Enter the title:  </label>
                        <input onChange={titleHandler} value={titleNote} type="text" id='title' placeholder="Enter note title" /><br /><br />
                        <label htmlFor="">Enter the Color:  </label>
                        <span onClick={() => changeColor("red")} style={{ backgroundColor: "red", borderRadius: "50%", padding: "10px", cursor: "pointer", display: "inline-block", width: "30px", height: "30px" }}></span>
                        <span onClick={() => changeColor("green")} style={{ backgroundColor: "green", borderRadius: "50%", padding: "10px", cursor: "pointer", display: "inline-block", width: "30px", height: "30px" }}></span>
                        <span onClick={() => changeColor("blue")} style={{ backgroundColor: "blue", borderRadius: "50%", padding: "10px", cursor: "pointer", display: "inline-block", width: "30px", height: "30px" }}></span>
                        <span onClick={() => changeColor("brown")} style={{ backgroundColor: "brown", borderRadius: "50%", padding: "10px", cursor: "pointer", display: "inline-block", width: "30px", height: "30px" }}></span><br /><br />
                        <button onClick={addData} type="submit">Create</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Welcome;
