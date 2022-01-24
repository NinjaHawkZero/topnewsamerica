import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Alert from "../common/Alert";

//Render signup form

function RegisterForm({register}) {
    const history = useHistory();
    const [formData, setFormData] = useState({ username: "", password: ""});
    const [formErrors, setFormErrors] = useState([]);


    //Handle form Submission

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await register(formData);
        if(result.success) {
          history.push("/stories");
        } else {
            setFormErrors(result.errors);
        }
    }

    //Update form on change

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }

    return (
<div className="SignupForm">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h2 className="mb-3">Register For TopNewsAmerica</h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
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
                    <label>Password</label>
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
                      : null
                  }
  
                  <button
                      type="submit"
                      className="btn btn-primary float-right"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

    )
}


export default RegisterForm;