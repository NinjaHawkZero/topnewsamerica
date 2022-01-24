import React from "react";
import StoryCard from "./StoryCard";

//Renders list of story card


function StoryCardList({stories}) {

    
    return (
        <div class="col d-flex justify-content-center">

<div className="StoryCardList">
             <h1 className="font-weight-bold">Top News America</h1>
            <p className="lead">All of America's top stories!</p>

            {stories.map(story => (
                <StoryCard
                key={story.url}
                author={story.author}
                title={story.title}
                description={story.description}
                url={story.url}
                publishedAt={story.publishedAt}
                urlToImage={story.urlToImage}

                />
            ))}

        </div>
        </div>
       
    )

}

export default StoryCardList;