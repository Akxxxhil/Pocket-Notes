import React, { useState } from 'react'
import "./Welcome.css"

function Welcome() {
    const [showinput, setShowInput] = useState(false)

    const [titlenote, setTitleNote] = useState("")
    const [allgroup, setAllGroup] = useState([])



    function clickhandler() {
        setShowInput(!showinput);

    }
    function titleHnadler(e) {
        setTitleNote(e.target.value)
    }
    function adddata() {
        setAllGroup(prevState => [...prevState, titlenote])
        setTitleNote("")
    }
    return (
        <>
            <div className='welcome-page'>
                <h1 className='heading'>Pocket Notes</h1>
                <div>
                    
                    {allgroup.map((item, index) => (
                        
                    <div style={{border:"5px solid red",margin:"5px",padding:"8px",paddingRight:"10px"}} key={index}>
                        <span style={{border:"5px solid green",margin:"3px",padding:"5px",borderRadius:"50%"}} ></span>{item}</div>
                ))}</div>
                <button onClick={clickhandler} className='add-btn'>Add</button>
            </div>
            <div className='title-input' style={{ display: showinput ? "block" : "none" }}>

                {showinput && (
                    <div>
                        <label htmlFor="">Enter the title:  </label>
                        <input onChange={titleHnadler} value={titlenote} type="text" id='title' placeholder="Enter note title" /><br /><br />
                        <label htmlFor="">Enter the Color:  </label>
                        <span style={{ backgroundColor: "red" }}>Red</span>
                        <span style={{ backgroundColor: "green" }}>Green</span>
                        <span style={{ backgroundColor: "blue" }}>Blue</span>
                        <span style={{ backgroundColor: "brown" }}>Brown</span><br /><br />
                        <button onClick={adddata} type="submit">submit</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Welcome
