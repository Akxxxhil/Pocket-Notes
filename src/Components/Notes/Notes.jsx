import React, { useState } from 'react';
import "./Notes.css"

function Notes() {
    const[allnotes,setAllNotes]=useState([])
    const [text, setText] = useState("")
    function addedNote(e) {
        setText(e.target.value)
    }
    function newNote(){
        setAllNotes((prevState)=>[...allnotes,text])
        setText("")
    }
    

    return (
        <div style={{backgroundColor:"#DAE5F5"}}>
           <div >
           <div>
                {allnotes.map((singleNote)=>{
                    return <div style={{backgroundColor:"white"}} className='singleNote'>{singleNote}</div>
                })}
            </div>
            <div style={{ position: "absolute", bottom: "0", width: "75%" }}>
                <div style={{ border: "2px solid white", position: "relative" }}>
                    <textarea
                    value={text}
                        onChange={addedNote}
                        name=""
                        id=""
                        rows="5"
                        cols="120"
                        style={{ width: "100%" }}
                        placeholder='Enter your text here...........'
                    ></textarea>
                    <button disabled={text.length === 0}
                    onClick={newNote}
                        style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                            zIndex: "1", // To make sure the button stays on top of the textarea
                        }}
                    >
                        Your Button
                    </button>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Notes;
