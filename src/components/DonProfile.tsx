import React, { useState } from "react";
import "./DonProfile.css";

const DonProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example donor data (Replace with actual API data)
  const donorData = {
    name: "John Doe",
    phone: "+91 9876543210",
    email: "johndoe@example.com",
    city: "Mumbai",
    street: "123 Main Street",
    district: "Andheri",
    state: "Maharashtra",
    pincode: "400001",
    donations: 10,
  };

  return (
    <>
      {/* Navbar with Right-Aligned Menu Button */}
      <nav className="navbar">
        <p>DonateSaathi</p>
        <div className="nav-right">
          <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            ☰ MENU
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <button onClick={() => window.location.href = "/don_home"}>Home</button>
              <button onClick={() => window.location.href = "/don_profile"}>Donate</button>
              <button onClick={() => window.location.href = "/don_history"}>History</button>
              <button className="logout" onClick={() => window.location.href = "/logout"}>Log Out</button>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Section */}
      
      <div className="profile-container">
  {/* Profile Image & Edit Button */}
          <div className="profile-img-section">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU"
              alt="Donor Profile"
              className="profile-pic"
            />
            <button className="edit-profile-btn">
              Edit Profile<span className="material-symbols-outlined"></span>
            </button>
            <div className="donation-count-box">
                <h3>No. of Donations:</h3>
                <p className="donation-number">{donorData.donations}</p>
          </div>
          </div>

          {/* Donor Details */}
          <div className="profile-details">
            <h1 className="donor-name">{donorData.name}</h1>
            <span className="donor-role">( Donor )</span>
            <p className="contact-info"><strong>Phone:</strong> {donorData.phone}</p>
            <p className="email-info"><strong>Email:</strong> {donorData.email}</p>

            <div className="address-info">
              <p><strong>Address:</strong></p>
              <p>{donorData.street}, {donorData.city}</p>
              <p>{donorData.district}, {donorData.state} - {donorData.pincode}</p>
            </div>
          </div>
        </div>

    </>
  );
};

export default DonProfile;