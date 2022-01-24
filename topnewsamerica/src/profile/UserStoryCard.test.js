import React from "react";
import { render } from "@testing-library/react";
import UserStoryCard from "./UserProfile";




it("matches snapshot with a story", function () {
    let story = { id:1, saved_by:2, author:"Jon Wayne", title:"War in the middleeast", description:"There are conflicting forces in the middleeast", published_at:"6:45pm", url:"https://www.macrumors.com/2022/01/01/apple-watch-life-saving-911-ad/", urlToImage:"https://images.macrumors.com/t/PvHWwlMR5LrYla3IjTpwcep860o=/1600x/article-new/2022/01/apple-watch-911-ad.jpeg"};
    const { asFragment } = render(
        
          <UserStoryCard story={story} />
        
    );
    expect(asFragment()).toMatchSnapshot();
  });