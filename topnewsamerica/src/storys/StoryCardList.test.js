import React from "react";
import { render } from "@testing-library/react";
import StoryCardList from "./StoryCardList";
import { UserProvider } from "../testUtils";
import { MemoryRouter } from "react-router-dom";


let stories = [{saved_by: 2, author:"Micheal John", title:"War in the middleeast", description:"There are conflicting forces in the middleeast", published_at:"2022-01-02T00:15:09Z", url:"https://www.macrumors.com/2022/01/01/apple-watch-life-saving-911-ad/", urlToImage:"https://images.macrumors.com/t/PvHWwlMR5LrYla3IjTpwcep860o=/1600x/article-new/2022/01/apple-watch-911-ad.jpeg"}]

it("matches snapshot with stories", function() {
    const { asFragment } = render(
    
 
    <MemoryRouter>
<UserProvider>
      <StoryCardList  stories={stories}/>
    </UserProvider>
    </MemoryRouter>
    
    
    );
    expect(asFragment()).toMatchSnapshot();
  });