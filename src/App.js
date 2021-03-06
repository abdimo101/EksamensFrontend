import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style2.css";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AdminPage from "./components/AdminPage";
import Cars from "./components/Cars";
import Races from "./components/Race";

export default function App({ facade }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };
  const signup = (user, pass) => {
    facade.signup(user, pass).then((res) => setSignedUp(true));
  };

  return (
    <Router>
      <div>
        <ul className="header">
          <Header facade={facade} loggedIn={loggedIn} logout={logout} />
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cars">
              <Cars />
            </Route>
            <Route path="/races">
              <Races />
            </Route>
            <Route path="/adminpage">
              <AdminPage facade={facade} />
            </Route>
            <Route path="/login">
              <LoginPage
                login={login}
                logout={logout}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                facade={facade}
              />
            </Route>
            <Route path="/signup">
              <SignupPage
                signup={signup}
                signedUp={signedUp}
                setSignedUp={setSignedUp}
                facade={facade}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h1>Abdi Abdulle</h1>
      <h2>Programmeringseksamen</h2>
      <p>username: user | password: test1 <br/> username: admin | password: test2. 
     <br/> Or you can sign up and make your own account</p>
    </div>
  );
}
