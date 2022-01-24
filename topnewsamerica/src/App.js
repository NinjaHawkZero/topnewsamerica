import React, {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage.js"
import Navigation from "./routes-nav/Navigation";
import SiteRoutes from "./routes-nav/Routes";
import TopNewsApi from "./api/Newsapi";
import jwt from "jsonwebtoken";
import UserContext from "./auth/UserContext";

export const Token_ID = "News-Token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(Token_ID);

//Loads User Info from API, function is dependent on value of Token
  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if(token) {
       try  {
        let {username} = jwt.decode(token);

        TopNewsApi.token = token;
        let currentUser = await TopNewsApi.getCurrentUser(username);
        setCurrentUser(currentUser);}

        catch (err) {
          console.error("App loadUserInfo: problem loading info", err);
          setCurrentUser(null)
        }

      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


  //Register
  async function register(registerData) {
    try {
      let token = await TopNewsApi.register(registerData);
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error("Registration Failed", err);
      return {success: false, err};
    }
  }


  //Login
  async function login(loginData) {
    try{
      let token = await TopNewsApi.login(loginData);
      setToken(token);
      return {success: true};

    } 
    catch(err) {
      console.error("login failed", err);
      return {success: false, err};
    }
  }

  //Logout
  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  //Save Story
  async function saveStory(story) {
    try{let res = await TopNewsApi.saveStory(story, currentUser.username);

    return {success: true}}
    catch(err) {
      console.error("Could not save story", err);
      return {success: false, err}
    }
  }

  //Remove Story
  async function removeStory(id) {
    try {
      let res = await TopNewsApi.deleteStory(id, currentUser.username);
      return {success: true}
    } catch(err) {
      console.error("Could not remove story", err);
      return {success: false, err}
    }
  }

  return (
    <BrowserRouter>
    <UserContext.Provider
    value={{currentUser, setCurrentUser, saveStory, removeStory}}>
      <div className="App">
        <Navigation logout={logout} />
        <SiteRoutes login={login} register={register} />
      </div>

    </UserContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;

