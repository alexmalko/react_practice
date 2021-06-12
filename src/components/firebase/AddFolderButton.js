import React, { useState } from "react";
import firebase from "firebase";
import { Button, Modal, Form } from "react-bootstrap";
import DescriptionIcon from "@material-ui/icons/Description";

import { useAuth } from "../firebase/context/AuthContext";
import { db } from "../../firebase";
import { ROOT_FOLDER } from "./hooks/useFolder";

function AddFolderButton({ currentFolder }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  function handleModal() {
    setOpen(!open);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentFolder == null) return;

    const path = [...currentFolder.path];
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id });
    }

    db.collection("folders")
      .add({
        name: name,
        userId: currentUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        parentId: currentFolder.id,
        path: path,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    setName("");
    handleModal();
  };

  return (
    <>
      <Button variant="outline-success" onClick={handleModal}>
        <DescriptionIcon />
      </Button>
      <Modal show={open} onHide={handleModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter file name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="secondary" onClick={handleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddFolderButton;
