import React from "react";
import { render } from "@testing-library/react";
import UserProfile from "./UserProfile";


it("matches snapshot with no stories", function() {
    const { asFragment } = render(<UserProfile />);
    expect(asFragment()).toMatchSnapshot();
  });