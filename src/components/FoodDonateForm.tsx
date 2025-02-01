import React, { useState } from 'react';
import './GroceryDonateForm.css';

interface Item {
  name: string;
  qty: string;
}

const GroceryDonateForm: React.FC = () => {
  const [items, setItems] = useState<Item[]>([{ name: '', qty: '' }]);

  const handleAddItem = () => {
    setItems([...items, { name: '', qty: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: keyof Item, value: string) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="maincon">
      <h1 className="head">DONATE FOOD</h1>
      <div className="con2">
        <div className="content">
          <div className="hed">
            <h3 className="additems" style={{ color: 'black' }}>Food Items</h3>
            <button className="btb" onClick={handleAddItem}>Add Item +</button>
          </div>
          <form id="foodform" action="/donate_grocery_submit" method="post">
            <label>Donation:</label>
            <input type="text" name="Donation" value="FOOD" readOnly id="def_in" />
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

            <h3 className="donate-to" style={{color:'black'}}>Donate From:</h3>
            <select name="orgname" id="org_sel" required>
              <option hidden value="">Select Organization</option>
              {/* Placeholder for organization options */}
            </select>

            <div  className="contact-address-container">
              <label className="contact-label">Contact:</label>
              <input type="text" name="contact" placeholder="Enter your contact" className="input-field" required />

              <label className="address-label">Address:</label>
              <input type="text" name="address" placeholder="Enter your address" className="input-field" required />
            </div>̥
          </form>
          
          <div className="donate">
            <button type="submit" id="don_bt" form="foodform">Donate</button>
          </div>
        </div>
      </div>
      <div className="popup">
        <div className="popChild">
          <h3 className="success-message">Thank You For Donating!</h3>
          <p>Organization will reach your address and contact you.</p>
          <button id="done">Done</button>
        </div>
      </div>
    </div>
  );
};

export default GroceryDonateForm;
