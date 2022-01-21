import React, {useContext} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from 'react-router-dom';
import {AuthContext} from "./context/AuthContext";

import TopMenu from "./components/TopMenu/TopMenu";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import UserProfile from "./pages/UserProfile/UserProfile";
import SignIn from "./pages/SignIn/SignIn";
import Media from "./pages/Media/Media";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";

function App() {
    const {isAuth, isAdmin} = useContext(AuthContext);

    return (
      <Router>
          <TopMenu/>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/signin">
                  <SignIn />
              </Route>
              <Route path="/media">
                  <Media/>
              </Route>
              <Route path="/userprofile">
                  {isAuth ? <UserProfile/> : <Redirect to="/signin"/>}

              </Route>
              <Route path="/userprofile/:id">
                  <UserProfile/>
              </Route>
              <Route path="/fileupload">
                  {isAdmin ? <FileUploadPage/> : <Redirect to="/"/>}
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
