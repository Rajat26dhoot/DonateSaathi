import React from 'react';
import './DonHistory.css';

interface DonHistoryProps {
  dataArr: any;
  name: string;
}

const DonHistory: React.FC<DonHistoryProps> = ({ dataArr, name }) => {
  return (
    <div className="container">
      <h3>History</h3>
      {dataArr && dataArr.don_his_data && dataArr.don_his_data.map((item: any, index: number) => (
        <div className="his_list" key={index}>
          <div className="donated_div">
            <div>
              <p><b>Donated to:</b> {item.Donate_to}</p>
              <p><b>Donation:</b> {item.Donation}</p>
              <b>Your Address:</b>
              <p>{item.address}</p>
              <b>Items:</b>
              <div className="one-items">
                {Array.isArray(item.Items) ? (
                  item.Items.map((subItem: any, subIndex: number) => (
                    <div className="one-item-one" key={subIndex}>
                      <span>{subItem}</span>
                      <span><span className="qty-label">Qty:</span>{item.EachItem_Qty[subIndex]}</span>
                    </div>
                  ))
                ) : (
                  <div className="one-item-one">
                    <span>{item.Items}</span>
                    <span><span className="qty-label">Qty:</span>{item.EachItem_Qty}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="org_info">
              <p>{item.Date}</p>
              <p>Organization Contact: {item.Organization_ph}</p>
            </div>
            {item.Status === "Pending" && (
              <div className="status_info">
                <span id="status1">Pending</span>
                <span>Organization will inform you shortly</span>
              </div>
            )}
            {item.Status === "Accepted" && (
              <div className="status_info">
                <span id="status2">Accepted</span>
                <span>Organization will reach out to you in {item.time}</span>
              </div>
            )}
            {item.Status === "Collected" && (
              <div className="status_info">
                <span id="status3">Donated</span>
                <span>Donated Successfully</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DonHistory;
