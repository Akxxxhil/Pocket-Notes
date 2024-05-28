// src/components/Notes/Notes.js

import React, { useState } from 'react';
import "./Notes.css";
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../Redux/Slice/ChatSlice';

function Notes({ chatId }) {
    const notes = useSelector((state) => state.pocketchat.notesByChatId[chatId] || []);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleNewNote() {
        const note = {
            text: text,
            timestamp: new Date().toLocaleString()
        };
        dispatch(addChat({ chatId, note }));
        setText("");
    }

    return (
        <div style={{ backgroundColor: "#DAE5F5" }}>
            <div>
                {notes.map((singleNote, index) => (
                    <div key={index} style={{ backgroundColor: "white" }} className='singleNote'>
                        <p>{singleNote.text}</p>
                        <p>{singleNote.timestamp}</p>
                    </div>
                ))}
            </div>
            <div style={{ position: "absolute", bottom: "0", width: "75%" }}>
                <div style={{ border: "2px solid white", position: "relative" }}>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        rows="5"
                        cols="120"
                        style={{ width: "100%" }}
                        placeholder='Enter your text here...........'
                    ></textarea>
                    <button
                        disabled={text.length === 0}
                        onClick={handleNewNote}
                        style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                            zIndex: "1",
                        }}
                    >
                        Your Button
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Notes;
