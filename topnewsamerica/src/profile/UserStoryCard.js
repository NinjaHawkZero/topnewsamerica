import React, {useContext} from "react";
import UserContext from "../auth/UserContext";
import "./StoryCard.css";



//Shows information about a story


function UserStoryCard({id, savedBy, author, title, description, publishedAt, url, urlToImage, stories, setStories }) {
    const {removeStory} = useContext(UserContext)
    const objId = {id}
    



    //Removes story for user

    
    async function handleRemove(){
      removeStory(objId);
      setStories(stories.filter(story => story.id !== id))

     
 }


    return (
        <div className="StoryCard"> 
        <div className="card-body">

          <h6 className="card-title">{title}
          {urlToImage && <img src={urlToImage} className="float-right ml-5" />}  </h6>
          <p>{author}</p>
          <div><small>{url}</small></div>
          <div><small>{publishedAt}</small></div>
           <div><p>{description}</p></div>
          
          <button
              className="btn btn-danger font-weight-bold text-uppercase float-right"
              onClick={handleRemove}
              
          >
            { "Remove Story"}
          </button>
        </div>
      </div>

    )
}

export default UserStoryCard;