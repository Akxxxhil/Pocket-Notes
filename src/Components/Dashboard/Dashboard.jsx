import React, { useState } from "react";
import "./Dashboard.css";
import Notes from "../Notes/Notes";

function Dashboard() {
  const [popup, setPopup] = useState(false);
  const[pageActive,setPageActive]=useState(false)
  const [title, setTilte] = useState("");
  const [colorpicker, setColorpicker] = useState();
  const [notesgroup, setNotesgroup] = useState([]);

  const isCreateEnabled = title.trim() !== "" && colorpicker !== "";
  function groupcreateHandler() {
    setNotesgroup((prevState) => [
      ...prevState,
      { title: title, colorpicker: colorpicker },
    ]);
    //setColorpicker("#B38BFA"); // Reseting color to default after group creation
    setTilte(""); //Reseting my input value
    setPopup(false);
  }
  function createHandler() {
    setPopup(!popup);
  }
  function titleHandler(e) {
    setTilte(e.target.value);
  }
  function colorchooser(color) {
    setColorpicker(color);
  }
  function pageHandler(){
setPageActive(true)
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="notes-group-dash">
          <h1 className="roboto-bold">Pocket Notes</h1>
          <div>
            {notesgroup.map((eachGroup, index) => {
              return (
                <div
                  className="eachgroup"
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <span
                    style={{
                      backgroundColor: eachGroup.colorpicker,
                      borderRadius: "50%",
                      padding: "10px",
                      cursor: "pointer",
                      display: "inline-block",
                      width: "30px",
                      height: "30px",
                    }}
                  ></span>
                  <span onClick={pageHandler} style={{ marginTop: "8px", marginLeft: "8px",cursor:"pointer" }}>
                    {eachGroup.title}
                  </span>
                </div>
              );
            })}
          </div>
          <button onClick={createHandler} className="create-btn">
            Create
          </button>
        </div>
        {pageActive ? (<Notes/>):(
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
        )}
      </div>
      {popup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Create New group</p>
            <label htmlFor="">Group Name </label>
            <input
              value={title}
              onChange={titleHandler}
              type="text"
              id="title"
              placeholder="Enter note title"
            />
            <br />
            <br />
            <label htmlFor="">Choose colour </label>
            <span
              onClick={() => colorchooser("#B38BFA")}
              className="color1-option color-chooser"
            ></span>
            <span
              onClick={() => colorchooser("#FF79F2")}
              className="color2-option color-chooser"
            ></span>
            <span
              onClick={() => colorchooser("#43E6FC")}
              className="color3-option color-chooser"
            ></span>
            <span
              onClick={() => colorchooser("#F19576")}
              className="color4-option color-chooser"
            ></span>
            <span
              onClick={() => colorchooser("#0047FF")}
              className="color5-option color-chooser"
            ></span>
            <span
              onClick={() => colorchooser("#6691FF")}
              className="color6-option color-chooser"
            ></span>
            <br />
            <br />
            <button onClick={groupcreateHandler}disabled={!isCreateEnabled} type="submit">
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
