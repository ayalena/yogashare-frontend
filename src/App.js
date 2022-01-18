import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import TopMenu from "./components/TopMenu/TopMenu";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import UserProfile from "./pages/UserProfile/UserProfile";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
      <Router>
          <TopMenu />
          <Switch>
              <Route path="/">
                  <Home />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/signin">
                  <SignIn />
              </Route>
              <Route path="/userprofile">
                  <UserProfile />
              </Route>
              <Route path="/userprofile/:id">
                  <UserProfile/>
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
