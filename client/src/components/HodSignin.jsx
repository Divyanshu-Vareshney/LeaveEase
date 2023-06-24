import React, { useState } from "react";


const HodSignin = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formErrors, setFormErrors] = useState({});

  const changeBorderColorOnError = (inputName) => {
    let formInput = document.getElementById(`${inputName}`);
    formInput.classList.add("error");
  };

  const handleInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleValidation = () => {
    let error = {};
    if (!formFields.email) {
      error.email = "Email is required";
      changeBorderColorOnError("email");
    }
    if (!formFields.password) {
      error.password = "Password is required";
      changeBorderColorOnError("password");
    }
    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    setFormErrors(handleValidation());
  };

  return (
    <section className="form-container">
      <h1 className="form-heading">HOD Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-item" id="email">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Your email"
            name="email"
            value={formFields.email}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.email}</span>
        </div>

        <div className="form-item" id="password">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your password"
            name="password"
            value={formFields.password}
            onChange={handleInputValueChange}
          />
          <span className="error-text">{formErrors.password}</span>
        </div>

        <button className="form-button" type="submit">
          SignIn
        </button>
      </form>
    </section>
  );
};

export default HodSignin;