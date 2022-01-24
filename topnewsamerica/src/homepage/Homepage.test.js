
  import React from "react";
  import { render } from "@testing-library/react";
  import Homepage from "./Homepage";
  import { UserProvider } from "../testUtils";
  import { MemoryRouter } from "react-router-dom";


  
  it("matches snapshot", function () {
      const { asFragment } = render(
        <MemoryRouter>  
        <UserProvider>
        <Homepage />
       </UserProvider>
        </MemoryRouter>
       
            
          
      );
      expect(asFragment()).toMatchSnapshot();
    });