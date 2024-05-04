import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [popup, setPopup] = useState(false);
  const [title, setTilte] = useState("")
  const [notesgroup, setNotesgroup] = useState([]);
  function groupcreateHandler() {
    setNotesgroup((prevState) => [...prevState, { title: title }])
    setTilte("")
    setPopup(false)
  }
  function createHandler() {
    setPopup(!popup);
  }
  function titleHandler(e) {
    setTilte(e.target.value)
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="notes-group-dash">
          <h1 className="roboto-bold">Pocket Notes</h1>
          <div>
            {notesgroup.map((eachGroup,index) => {
              return <div className="eachgroup" key={index}>{eachGroup.title}</div>
            })}
          </div>
          <button onClick={createHandler} className="create-btn">
            Create
          </button>
        </div>
        <div className="notes-dash">
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="./images/logo.png"
            alt=""
          />
          <h1 className="roboto-bold" style={{ textAlign: "center" }}>
            Pocket Notes
          </h1>
          <br />
          <p className="roboto-medium" style={{ textAlign: "center" }}>
            Send and receive messages without keeping your phone online.
          </p>
          <p className="roboto-medium" style={{ textAlign: "center" }}>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <p
            className="roboto-medium"
            style={{
              position: "absolute",
              bottom: "0",
              left: "25%",
              right: "0",
              textAlign: "center",
            }}
          >
            end-to-end encrypted
          </p>
        </div>
      </div>
      {popup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Create New group</p>
            <label htmlFor="">Group Name </label>
            <input value={title} onChange={titleHandler} type="text" id="title" placeholder="Enter note title" />
            <br />
            <br />
            <label htmlFor="">Choose colour </label>
            <span className="color1-option color-chooser"></span>
            <span className="color2-option color-chooser"></span>
            <span className="color3-option color-chooser"></span>
            <span className="color4-option color-chooser"></span>
            <span className="color5-option color-chooser"></span>
            <span className="color6-option color-chooser"></span>
            <br />
            <br />
            <button onClick={groupcreateHandler} type="submit">Create</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
