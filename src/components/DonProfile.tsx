import React from 'react';
import './DonProfile.css';

const DonProfile: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FOOD DONATION
          </a>
          <div className="con">
            <h3
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
              style={{ border: 'none' }}
            >
              {/* Placeholder for dynamic name */}
            </h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                MENU
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/don_home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{
                      backgroundColor: '#666699',
                      paddingLeft: '20px',
                      borderRadius: '5px',
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/don_history"
                  >
                    History
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container1"></div>
      <div className="container">
        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&usqp=CAU"
            alt=""
            className="pic"
          />
          <div className="btn">
            <button>
              Edit Profile<span className="material-symbols-outlined"> edit </span>
            </button>
          </div>
          <div className="count">
            <h3>No. of Donoations:</h3>
            <p>{/* Placeholder for no_donations */}</p>
          </div>
        </div>
        <div className="form">
          <h1 id="name">{/* Placeholder for Donor_name */}</h1>
          <span>( Donor )</span>
          <p id="contact">+91 {/* Placeholder for ph_no */}</p>
          <p id="email">{/* Placeholder for email */}</p>
          <div id="address">
            <p>{/* Placeholder for city */},{/* Placeholder for street */}</p>
            <p>{/* Placeholder for dist */}</p>
            <p>{/* Placeholder for state */} - {/* Placeholder for pincode */}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonProfile;
