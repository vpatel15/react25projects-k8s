import React, { useState } from "react";
import Modal from "./modal";

const ModalContainer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div style={{padding: 50}}>
      {show && (
        <Modal
          onClose={handleClose}
          id={undefined}
          header={undefined}
          body={<h1>Custom Content</h1>}
          footer={undefined}
        />
      )}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Modal" : "Show Modal"}
      </button>
    </div>
  );
};

export default ModalContainer;
