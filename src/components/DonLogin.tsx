import React, { useState } from 'react';
import './DonLogin.css';

const DonLogin: React.FC = () => {
  const [flashMessage, setFlashMessage] = useState<string | null>(null);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here, e.g., form validation or API call.
    setFlashMessage('Login failed. Please try again.'); // Example of setting a flash message
  };

  return (
    <div className="body">
      <div className="login-header">
       <div className="login-content">
          <h1>Welcome to DonateSaathi </h1>
      <p>
      Together, we can make a difference. Log in now to start helping those in need.
       </p>
    </div>
     </div>

      
      {/* Display Flash Message */}
      {flashMessage && <div className="flashmsg">{flashMessage}</div>}

      <div className="con_bdy">
        <h3>Donor Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="input_box">
            <p>Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <p>Password</p>
            <input
              type="password"
              name="psw"
              placeholder="Enter Password"
              required
            />
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </div>
        </form>
        <p className="reg_link">
          New here? 
          <a href="/donRegister" className="register-link"> Register as a Donor</a>
        </p>
      </div>

      <div className="org_button">
        <form action="/orglogin">
          <button>Organization Login</button>
        </form>
      </div>


    </div>
  );
};

export default DonLogin;
