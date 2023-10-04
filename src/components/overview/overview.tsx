import synthesized_data from './synthesized_data.json';

// Function to calculate external power source
function calculateExternalPower(netGain) {
  return netGain < 0 ? Math.abs(netGain) : 0;
}

function Overview() {
    // Calculate the current time and round it to the nearest 15-minute interval
    const currentTime = new Date();
    var minutes = currentTime.getMinutes();
    const minutesToSubtract = minutes % 15;
    const nearest15 = minutes - minutesToSubtract;
    currentTime.setMinutes(nearest15);
    const year = currentTime.getFullYear();
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
    const day = currentTime.getDate().toString().padStart(2, '0');
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutesFormatted = currentTime.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutesFormatted}`;
    const entry = synthesized_data.find((item) => item.DATE_TIME === formattedTime);
    return (
      <div className="overview">
        <h2>Overview</h2>
        {entry && (
          <div>
            <p>
              <span className="small-text">Power Consumption:</span>
              <span className="value">
                {Object.values(entry.usage).reduce((total, consumption) => total + consumption, 0).toFixed(2)}
              </span>
              <span className="unit"> kW/h</span>
            </p>
            <p>
              <span className="small-text">Solar Production:</span>
              <span className="value">{entry.dc_power.toFixed(2)}</span>
              <span className="unit"> kW/h</span>
            </p>
            <p>
              <span className="small-text">Net Gain:</span>
              <span className="value">{calculateExternalPower(entry.net_gain).toFixed(2)}</span>
              <span className="unit"> kW/h</span>
            </p>
          </div>
        )}
      </div>
    );
  }
  
  export default Overview;
  
