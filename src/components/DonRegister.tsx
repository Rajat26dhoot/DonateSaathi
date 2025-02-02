import React from "react";
import "./DonRegister.css";

const DonRegister: React.FC = () => {
  return (
    <div className="donor-body">
      {/* Navbar Section */}
      <nav className="donor-navbar">
        <div className="donor-nav-content">
          <h1>Donor Registration</h1>
         
        </div>
      </nav>

      {/* Form Container */}
      <div className="donor-container">
        <h2>Create Account</h2>
        <form action="/don_register_submit" method="post">
          <div className="donor-form-data">
            <div className="donor-input-box">
              <span>Name</span>
              <input type="text" name="user_name" placeholder="Enter Organization Name" required />
            </div>
            <div className="donor-input-box">
              <span>State</span>
              <input type="text" name="state" placeholder="Enter State" required />
            </div>
            <div className="donor-input-box">
              <span>District</span>
              <input type="text" name="district" placeholder="Enter District" required />
            </div>
            <div className="donor-input-box">
              <span>City</span>
              <input type="text" name="city" placeholder="Enter City Name" required />
            </div>
            <div className="donor-input-box">
              <span>Street</span>
              <input type="text" name="street" placeholder="Enter Street Name" required />
            </div>
            <div className="donor-input-box">
              <span>Pin Code</span>
              <input type="text" name="pincode" placeholder="Enter Pin Code" required />
            </div>
            <div className="donor-input-box">
              <span>Phone Number</span>
              <input type="text" name="phone_no" placeholder="Enter Phone Number" required />
            </div>
            <div className="donor-input-box">
              <span>Email</span>
              <input type="email" name="email" placeholder="Enter Email" required />
            </div>
            <div className="donor-input-box">
              <span>Password</span>
              <input type="password" name="psw" placeholder="Enter Password" required />
            </div>
            <div className="donor-input-box">
              <span>Confirm Password</span>
              <input type="password" name="c_psw" placeholder="Re-Enter Password" required />
            </div>
            <div className="donor-button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
        <p className="donor-login-link">
          Already have an account? <a href="/donlogin">Login</a>
        </p>
      </div>
    </div>
  );
};

export default DonRegister;