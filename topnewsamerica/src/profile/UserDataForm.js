import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import TopNewsApi from "../api/Newsapi";
import UserContext from "../auth/UserContext";

function UserDataForm() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [formData, setFormData] = useState({username: currentUser.username, password:"" });
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);



    //Handle Form Submission


    async function handleSubmit(evt) {
        evt.preventDefault();

        let userFormData = formData;
        let updatedUser;

        try {
            updatedUser = await TopNewsApi.updateProfile(currentUser.username, userFormData)
        } catch (err) {
            setFormErrors(err);
            return;
        }

        setFormData(f => ({...f, password:""}));
        setFormErrors([]);
        setSaveConfirmed(true);
        setCurrentUser(updatedUser);

        
    }


    //Handle changes

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(f => ({...f, [name]: value})); 
        setFormErrors([]);
    }


return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
    <h3>Profile</h3>
    <div className="card">
      <div className="card-body">
        <form>
          
          <div className="form-group">
            <label>Username</label>
            <input
                name="username"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
            />
          </div>
         
        
          <div className="form-group">
            <label>Confirm password to make changes:</label>
            <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
            />
          </div>

          {formErrors.length
              ? <Alert type="danger" messages={formErrors} />
              : null}

          {saveConfirmed
              ?
              <Alert type="success" messages={["Updated successfully."]} />
              : null}

          <button
              className="btn btn-primary btn-block mt-4"
              onClick={handleSubmit}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  </div>
)




}

export default UserDataForm;