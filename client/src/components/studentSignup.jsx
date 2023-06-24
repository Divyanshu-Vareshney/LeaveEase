import React from "react";
import { useState } from "react";

const StudentSignup=()=>{
    const defaultFormFields={
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    };
    const[formFields,setFormFields]=useState(defaultFormFields);
    const[formErrors,setFormErrors]=useState({});
    const changeBorderColorOnError = (inputName) => {
        let formInput = document.getElementById(`${inputName}`);
        formInput.classList.add("error");
      };
    
    const handleValidation=()=>{
        let error={};
        if(!formFields.email){
            error.email="Email is required"
            changeBorderColorOnError("email");
        }
        if(!formFields.password){
            error.password="Password is required"
            changeBorderColorOnError("password");
        }
        if(!formFields.name){
            error.name="Name is required"
            changeBorderColorOnError("name");
        }
        if(!formFields.confirmPassword){
            error.confirmPassword="Confirm Password is required"
            changeBorderColorOnError("confirmPassword");
        }
        return error;
    }

    const handleInputValueChange=(event)=>{
        const{name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formFields);
        setFormErrors(handleValidation())
    }
    return(
        <section className="form-container">
            
            <h1 className="form-heading">Create An Account</h1>
                 <form onSubmit={handleSubmit}>
                    <div className="form-item" id="name">
                        <label >Name</label>
                        <input type="text" placeholder="Enter Your Name" name="name" value={formFields.name} onChange={handleInputValueChange} />
                        <span className="error-text">{formErrors.name}</span>
                    </div>

                    <div className="form-item" id="email">
                        <label >Email</label>
                        <input type="text" placeholder="Enter Your email" name="email"  value={formFields.email} onChange={handleInputValueChange}/>
                        <span className="error-text">{formErrors.email}</span>
                    </div>

                    <div className="form-item" id="password">
                        <label >Password</label>
                        <input type="password" placeholder="Enter Your password" name="password"  value={formFields.password} onChange={handleInputValueChange}/>
                        <span className="error-text">{formErrors.password}</span>
                    </div>
                    <div className="form-item" id="confirmPassword">
                        <label >Confirm Password</label>
                        <input type="password" placeholder="Confirm Your Password" name="confirmPassword"  value={formFields.confirmPassword} onChange={handleInputValueChange}/>
                        <span className="error-text">{formErrors.confirmPassword}</span>
                    </div>
                    <button className="form-button" type="submit">SignUp</button>
                 </form>
            
        </section>
    )

}
export default StudentSignup;
