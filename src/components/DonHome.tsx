import React from 'react';
import './DonHome.css';

const DonHome: React.FC = () => {
  return (
    <div className="con2">
      <div className="bg_col">
        <div className="food">
          <h2 className="foodhead">DONATE FOOD</h2>
          <p>
            Food donation serves a dual purpose by reducing food wastage and
            providing essential sustenance to individuals and families facing
            economic challenges. Food donation fosters a sense of community
            and solidarity, encouraging people to come together to tackle the
            critical issue of food insecurity, ensuring that no one goes to
            bed hungry.
          </p>
          <div className="bt">
            <form action="/donat_food" method="get">
              <button className="btb">Donate</button>
            </form>
          </div>
        </div>
        <div className="grocery">
          <h2 className="groceryhead">DONATE GROCERY</h2>
          <p>
            This charitable gesture aims to support individuals and families
            facing financial hardship or crisis by providing them with the
            necessary resources to meet their basic needs. Grocery donations
            can take place through organized food drives, community
            initiatives, or direct contributions to food banks, shelters, and
            charitable organizations.
          </p>
          <div className="bt">
            <form action="/donat_grocy" method="get">
              <button className="btb">Donate</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonHome;
