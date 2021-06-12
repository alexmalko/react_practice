import React from "react";
import { auth } from "./firebase";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Top() {
  return (
    <LinkContent>
      <div>
        <Button variant="contained" onClick={() => auth.signOut()}>
          Sign out
        </Button>
      </div>
      <div>
        <Link to="/firebase">
          <Button variant="contained">Firebase</Button>
        </Link>
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <Link to="/hooks">
          <Button variant="contained">Hooks</Button>
        </Link>
        <Link to="/signup">
          <Button variant="contained">Sign Up With Email</Button>
        </Link>
      </div>
    </LinkContent>
  );
}

export default Top;

const LinkContent = styled.div`
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div > button {
    margin: 10px;
  }
  > div > a {
    margin: 10px;
    text-decoration: none;
  }
`;
