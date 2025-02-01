import React from 'react';
import './DonRegister.css';

const DonRegister: React.FC = () => {
  return (
    <div className="bdy">
      <div className="info">
        <h1>Donor Registration</h1>
        <p>
          We are a country that prides itself on power and wealth, yet there are
          millions of children who go hungry every day. It is our responsibility,
          not only as a nation, but also as individuals, to get involved. So,
          next time you pass someone on the street who is in need, remember how
          lucky you are, and don't turn away.
        </p>
      </div>
      <div className="container">
        <h2>Create Account</h2>
        {/* Placeholder for success/error message */}
        <form action="/don_register_submit" method="post">
          <div className="form_data">
            <div className="input_box">
              <span>Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Organization Name"
                required
              />
            </div>
            <div className="input_box">
              <span>State</span>
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                required
              />
            </div>
            <div className="input_box">
              <span>District</span>
              <input
                type="text"
                name="district"
                placeholder="Enter District"
                required
              />
            </div>
            <div className="input_box">
              <span>City</span>
              <input
                type="text"
                name="city"
                placeholder="Enter City Name"
                required
              />
            </div>
            <div className="input_box">
              <span>Street</span>
              <input
                type="text"
                name="street"
                placeholder="Enter Street Name"
                required
              />
            </div>
            <div className="input_box">
              <span>Pin Code</span>
              <input
                type="text"
                name="pincode"
                placeholder="Enter Pin Code"
                required
              />
            </div>
            <div className="input_box">
              <span>Phone Number</span>
              <input
                type="text"
                name="phone_no"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div className="input_box">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="input_box">
              <span>Password</span>
              <input
                type="password"
                name="psw"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="input_box">
              <span>Confirm Password</span>
              <input
                type="password"
                name="c_psw"
                placeholder="Re-Enter Password"
                required
              />
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </div>
        </form>
        <p style={{ fontFamily: 'sans-serif', fontSize: 'small' }}>
          Already have an account? <a href="/donlogin">Login</a>
        </p>
      </div>
    </div>
  );
};

export default DonRegister;
