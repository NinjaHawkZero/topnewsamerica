import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import StoryCardList from "../storys/StoryCardList";
import TopNewsApi from "../api/Newsapi";
import UserContext from "../auth/UserContext";


//Renders homepage


function Homepage() {
    const { currentUser } = useContext(UserContext);
    const [stories, setStories] = useState([]);

    useEffect(() => {
    async function getStories() {
        let stories = await TopNewsApi.getStories();
        setStories(stories);

    }
    getStories();}, []);
   
    return (
        <div className="Homepage">
          <div className="container">
            
           
           
           <div>

           { currentUser && stories.length > 0 ? (
         <div className="StoryList col-md-8 offset-md-2">
        <StoryCardList stories={stories} />
        </div>
        
        ) : currentUser && stories.length === 0 ? (<p className="lead">Sorry, no results were found!</p>) : 
        
        <div>

            <h1 className="font-weight-bold">Top News America</h1>
            <p className="lead">All of America's top stories!</p>
            <p>You need to login or register to see today's top s</p>
      
      </div>
  

        }
           </div>
        
      
     
           
            
          </div>
        </div>
    );
  }
  
  export default Homepage;