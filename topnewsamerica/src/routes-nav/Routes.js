import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/SignupForm";
import UserProfile from "../profile/UserProfile";
import UserDataForm from "../profile/UserDataForm";
import PrivateRoute from "./PrivateRoute";


//Routes for the site;  Privite Routes is an authorization component wrapped around routes that require login.
//Going to a route that doesn't exist will redirect to homepage

function SiteRoutes({login, register}) {


    return (
        <div className="pt-5">
        <Switch>


        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

          <Route exact path="/register">
            <RegisterForm register={register} />
          </Route>
         

         <PrivateRoute path="/userDataForm">
           <UserDataForm />
         </PrivateRoute>



          <PrivateRoute path="/userProfile">
            <UserProfile />
          </PrivateRoute>

          <Redirect to="/" />
      
          
        </Switch>
      </div>

    );
}

export default SiteRoutes;