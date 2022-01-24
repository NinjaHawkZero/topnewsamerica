//import axios from "axios";
const axios = require("axios");

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const API_KEY = `923cdfb34c684486ae9912d7ada90b4b`






//API Class


class TopNewsApi {
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);


        const url = `${URL}/${endpoint}`;
        const headers = {Authorization: `${TopNewsApi.token}`};
        const params = (method === "get") ? data : {};


        try {
            return (await axios({url, method, data, params, headers})).data;
        } catch(err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }



    }

    //Get current user

    static async getCurrentUser(username) {
        let res = await this.request(`${username}`);

        return res.user;
    }

    //Update User Data

    static async updateProfile(username, data) {
        let res = await this.request(`${username}`, data, "patch");

        return res.user;
    }

    //Get current stories


   
  
     static async  getStories() {
            let result = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        
            let stories = result.data.articles;
            let newStories = stories.map((story) => {delete story.source && delete story.content; return story})
            console.log(newStories)
            return newStories
        }
        
        

        


    //Login user and get token

    static async login(data) {
        let res = await this.request(`login`, data, "post");

        return res.token;
    }


    //Register User
    static async register(data) {
        let res = await this.request(`register`, data, "post");

        return res.token;
    }


    //Save Story
    static async saveStory(data, username) {
        let res = await this.request(`${username}/saveStory`, data, "post");

        return res.savedStory;
    }


    //Get Stories

    static async getUserStories(username) {
        let res = await this.request(`${username}/userstories`);

        return res.stories;
    }




    //Delete Story
    static async deleteStory(data, username) {
        let res = await this.request(`${username}/deleteStory`, data, "delete");

        return res.deleted;
    }
}





  TopNewsApi.getStories();




export default  TopNewsApi;
