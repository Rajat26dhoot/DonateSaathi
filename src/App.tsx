import React, { useState } from "react";
import DonHistory from "./components/DonHistory";
import DonHome from "./components/DonHome";
import DonLogin from "./components/DonLogin";
import DonProfile from "./components/DonProfile";
import DonRegister from "./components/DonRegister";
import FoodDonateForm from "./components/FoodDonateForm";
import GroceryDonateForm from "./components/GroceryDonateForm";
import Intro from "./components/Intro";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState<string | null>("home");

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };


  const dummyData = {
    don_his_data: [
      {
        Donate_to: "Organization A",
        Donation: "Food",
        address: "123 Main St",
        Items: ["Apples", "Bananas"],
        EachItem_Qty: [5, 10],
        Date: "2024-01-29",
        Organization_ph: "555-1234",
        Status: "Pending",
      },
      {
        Donate_to: "Organization B",
        Donation: "Groceries",
        address: "456 Oak Ave",
        Items: "Milk",
        EachItem_Qty: 2,
        Date: "2024-01-28",
        Organization_ph: "555-5678",
        Status: "Accepted",
        time: "2 hours",
      },
      {
        Donate_to: "Organization C",
        Donation: "Clothes",
        address: "789 Pine Ln",
        Items: ["Shirts", "Pants"],
        EachItem_Qty: [3, 2],
        Date: "2024-01-27",
        Organization_ph: "555-9012",
        Status: "Collected",
      },
    ],
  };

  return (
    <div>
      {activeComponent === "login" ? (
        <DonLogin />
      ) : activeComponent === "profile" ? (
        <DonProfile />
      ) : activeComponent === "register" ? (
        <DonRegister />
      ) : activeComponent === "foodDonate" ? (
        <FoodDonateForm />
      ) : activeComponent === "groceryDonate" ? (
        <GroceryDonateForm />
      ) : activeComponent === "intro" ? (
        <Intro />
      ) : (
        <>
          <DonHome />
          <DonHistory dataArr={dummyData} name="John Doe" />
        </>
      )}

      <div className="button-container">
        <button onClick={() => handleNavigation("login")} className="nav-button">
          Login
        </button>
        <button onClick={() => handleNavigation("profile")} className="nav-button">
          Profile
        </button>
        <button onClick={() => handleNavigation("register")} className="nav-button">
          Register
        </button>
        <button onClick={() => handleNavigation("foodDonate")} className="nav-button">
          Food Donate
        </button>
        <button onClick={() => handleNavigation("groceryDonate")} className="nav-button">
          Grocery Donate
        </button>
        <button onClick={() => handleNavigation("intro")} className="nav-button">
          Intro
        </button>
        <button onClick={() => handleNavigation("home")} className="nav-button">
          Home
        </button>
      </div>
    </div>
  );
}

export default App;
