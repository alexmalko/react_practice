import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import { useFolder } from "./hooks/useFolder";
import Navbar from "./Navbar";

function Firebase() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  console.log(childFolders);

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder}></AddFolderButton>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default Firebase;
