import React from "react";
import { render } from "@testing-library/react";
import UserStoryCardList from "./UserStoryCardList";


it("matches snapshot with no stories", function() {
    const { asFragment } = render(<UserStoryCardList />);
    expect(asFragment()).toMatchSnapshot();
  });