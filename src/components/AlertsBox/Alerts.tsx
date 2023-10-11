import React from 'react';
import "./Alerts.scss"

const AlertsBox = () => {
  return (
    <div className="Alerts">
      <h2>ALERTS</h2>
      <div className='Alert'>You used 23% less grid power this week!</div>
      <div className='Alert'>Cluster 2 performing at 93% efficiency.</div>
      <div className='Alert'>Cluster 1 performing at 97% efficiency.</div>
    </div>
  );
}

export default AlertsBox;