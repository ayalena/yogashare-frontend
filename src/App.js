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
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import SignIn from "./pages/SignIn/SignIn";
import Media from "./pages/Media/Media";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";
import AddUserInfo from "./pages/UserInfo/AddUserInfo";

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
                  {isAuth ? <Media/> : <Redirect to="/signin"/>}
              </Route>
              <Route path="/userprofilepage">
                  {isAuth ? <UserProfilePage/> : <Redirect to="/signin"/>}
              </Route>
              <Route path="/userprofile/:id">
                  <UserProfilePage/>
              </Route>
              <Route path="/fileupload">
                  {isAdmin ? <FileUploadPage/> : <Redirect to="/"/>}
              </Route>
              <Route path="/add-info">
                  {isAuth ? <AddUserInfo/> : <Redirect to="/signin"/>}
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
