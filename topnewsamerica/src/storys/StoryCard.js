import React, {useContext, useState} from "react";
import {Card, Button} from "antd";
import "./StoryCard.css";
import UserContext from "../auth/UserContext";

const {Meta} = Card;

//Shows information about a story




function StoryCard({author, title, description, url,  urlToImage, publishedAt}) {
    let story = {author, title, description, publishedAt, url, urlToImage};
    const {saveStory} = useContext(UserContext);
    const [saved, setSaved] = useState();


    //Saves Story for User
    async function handleSave(evt){
        saveStory(story);
        setSaved(true);
    }

    return (
      <div className="Story">
       
      <Card
      key={url}
      hoverable
      style={{ width: "50%" }}
      cover={<img alt="image" src={urlToImage} className="img" />}
    >
      <Meta title={title} description={description} publishedAt={publishedAt} author={author} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button type="primary" style={{ marginTop: "10px" }} onClick={handleSave} disabled={saved}>
        {saved ? "Saved!" : "View & Save"}
        </Button>
      </a>
    </Card>
    </div>
    )
}

export default StoryCard;

//{urlToImage && <img src={urlToImage} className="float-right ml-5"  className="card-img-top"/>}




/*
<div className="card w-50" > {saved}


{urlToImage && <img src={urlToImage} className="float-right ml-5"  className="card-img-top"/>}
<div class="card-header">{title}</div>
 <div className="card-body">

   <h6 className="card-title">{author}</h6>
   
   <p class="card-text">{url}</p>
   <p class="card-text">{publishedAt}</p>
    <p class="card-text">{description}</p>
    
 
    <button
       className="btn btn-danger font-weight-bold text-uppercase float-right"
     
       onClick={handleSave}
       disabled={saved}
   >
     {saved ? "Saved!" : "Save"}
   </button>

 </div>

</div>

.card {
  
  max-height: 250px;
  margin-bottom: 1rem;
  color: inherit;
  border-radius: 0;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

}

  .card-img-top {
    width: 50px;
    height: 50px;
    object-fit: cover;
}


*/