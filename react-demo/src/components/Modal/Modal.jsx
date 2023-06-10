import React from "react";
import "./Modal.css";
const Modal = ({ open }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="cacelBtn">
          <button id="btnCancel" onClick={() => open(false)}>
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title"><h1>Do you want to continue?</h1></div>
        <div className="body"><p>I recommend, you should wait and then see!</p></div>
        <div className="footer">
          {" "}
          <button>Post</button>{" "}
          <button onClick={() => open(false)}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
