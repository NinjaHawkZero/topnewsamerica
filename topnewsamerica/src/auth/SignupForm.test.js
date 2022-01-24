
  import React from "react";
  import { render } from "@testing-library/react";
  import RegisterForm from "./SignupForm";

  
  it("matches snapshot", function () {
      const { asFragment } = render(
          
            <RegisterForm />
          
      );
      expect(asFragment()).toMatchSnapshot();
    });