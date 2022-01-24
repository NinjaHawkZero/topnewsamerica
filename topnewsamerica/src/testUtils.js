import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser",
  password: "testpass",
  
};

const save = async function saveStory(story) {
  try{let res = await TopNewsApi.saveStory(story, currentUser.username);

  return {success: true}}
  catch(err) {
    console.error("Could not save story", err);
    return {success: false, err}
  }
}

const UserProvider =
    ({ currentUser = demoUser, saveStory = save}) => (
    <UserContext.Provider value={{ currentUser, saveStory }}>
      
    </UserContext.Provider>
);

export { UserProvider };