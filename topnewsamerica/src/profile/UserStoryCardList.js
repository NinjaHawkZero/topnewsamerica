import React from "react";
import UserStoryCard from "./UserStoryCard"

//Renders list of story card


function UserStoryCardList({stories, setStories}) {

    return (
        <div className="userStoryCardList">
            {stories.map(story => (
                <UserStoryCard
                key={story.id}
                id={story.id}
                savedBy={story.savedBy}
                author={story.author}
                title={story.title}
                description={story.description}
                publishedAt={story.publishedAt}
                urlToImage={story.urlToImage}
                stories={stories}
                setStories={setStories}

                />
            ))}

        </div>
    )

}

export default UserStoryCardList;