import React from "react";
import { render } from "@testing-library/react";
import StoryCard from "./StoryCard";
import { UserProvider } from "../testUtils";
import { MemoryRouter } from "react-router-dom";




it("matches snapshot with a story", function () {
    let story = { author:"Jon Wayne", title:"War in the middleeast", description:"There are conflicting forces in the middleeast", published_at:"6:45pm", url:"https://www.macrumors.com/2022/01/01/apple-watch-life-saving-911-ad/", urlToImage:"https://images.macrumors.com/t/PvHWwlMR5LrYla3IjTpwcep860o=/1600x/article-new/2022/01/apple-watch-911-ad.jpeg"};
    const { asFragment } = render(
        <MemoryRouter>
      <UserProvider>
             <StoryCard story={story} />
      </UserProvider>
      </MemoryRouter>
        
    );
    expect(asFragment()).toMatchSnapshot();
  });