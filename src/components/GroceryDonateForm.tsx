import React, { useState } from 'react';
import './GroceryDonateForm.css';

interface Item {
  name: string;
  qty: string;
  [key: string]: string;
}

const GroceryDonateForm: React.FC = () => {
  const [items, setItems] = useState<Item[]>([{ name: '', qty: '' }]);

  const handleAddItem = () => {
    setItems([...items, { name: '', qty: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleItemChange = (index: number, field: string, value: string) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  return (
    <div className="maincon">
      <h1 className="head">DONATE GROCERY</h1>
      <div className="con2">
        <div className="content">
          <div className="hed">
            <h3 className="additems">Grocery Items</h3>
            <button className="btb" id="addInputButton" onClick={handleAddItem}>
              Add Item +
            </button>
          </div>
          <form id="foodform" action="/donat_grocery_submit" method="post">
            <label>Donation:</label>
            <input
              type="text"
              name="Donation"
              value="Grocery"
              id="def_in"
              readOnly
            />
            <div id="inputContainer">
              {items.map((item, index) => (
                <div key={index}>
                  <input
                    type="text"
                    name="item"
                    placeholder="Item Name"
                    id="inp1"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(index, 'name', e.target.value)
                    }
                    required
                  />
                  <input
                    type="number"
                    name="qty"
                    placeholder="Qty"
                    id="inp2"
                    value={item.qty}
                    onChange={(e) =>
                      handleItemChange(index, 'qty', e.target.value)
                    }
                    required
                  />
                  <img
                    src="https://img.icons8.com/?size=50&id=3062&format=png"
                    alt="remove"
                    onClick={() => handleRemoveItem(index)}
                    style={{ cursor: 'pointer', marginTop: '-5px', height: '40px', width: '40px' }}
                  />
                </div>
              ))}
            </div>

            <h3 className="donate-to">Donate To:</h3>
            <select name="orgname" id="org_sel" required>
              <option selected hidden value="">
                Select Organization
              </option>
              {/* Placeholder for organization options */}
            </select>
          </form>
          <h3 className="contact">Contact:</h3>
          {/* Placeholder for contact info */}
          <h3 className="address-con">Address:</h3>
          <div className="address">
            {/* Placeholder for address */}
          </div>
          <div className="donate">
            <button type="submit" id="don_bt" form="foodform">
              Donate
            </button>
          </div>
        </div>
      </div>
      <div className="popup">
        <div className="popChild">
          <div>
            <h3 style={{ color: 'rgb(1, 184, 1)', fontWeight: 'bold' }}>
              Thank You For Donating.!
            </h3>
            <p>
              Organization will reach your address
              <br />
              and contacts you.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <button id="done">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryDonateForm;
