import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "react-spinkit";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header";
import Todos from "./components/TodoRegular/Todos";
import TodosRdx from "./components/TodoReduxToolkit/TodosRdx";
import FirebaseDemo from "./components/firebase/FirebaseDemo";
import Login from "./components/LoginWithEmail/Login";
import Navbar from "./Navbar";
import HooksPractice from "./components/hooksPractice/HooksPractice";
import Signup from "./components/LoginWithEmail/Signup";
import { AuthProvider } from "./components/firebase/context/AuthContext";
import ForgotPassword from "./components/LoginWithEmail/ForgotPassword";
import UpdateProfile from "./components/LoginWithEmail/UpdateProfile";
import Dashboard from "./components/firebase/Dashboard";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContent>
      </AppLoading>
    );
  }

  return (
    <Router>
      <AuthProvider>
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Header />
                <Todos />
                <TodosRdx />
              </Route>
              <Route exact path="/folder/:folderId" component={Dashboard} />
              <Route path="/firebase" exact>
                <FirebaseDemo />
              </Route>
              <Route path="/hooks" exact>
                <HooksPractice />
              </Route>
              <Route path="/signup" exact>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <Signup />
                </Container>
              </Route>
              <Route path="/login" exact>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <Login />
                </Container>
              </Route>
              <Route path="/forgot-password" exact>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <ForgotPassword />
                </Container>
              </Route>
              <Route path="/profile" exact>
                <Container
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: "100vh" }}
                >
                  <UpdateProfile />
                </Container>
              </Route>
            </Switch>
          </>
        )}
      </AuthProvider>
    </Router>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 200px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
