import React from "react";

function LocationDetails({ ipData, errorMsg }) {
  return (
    <>
      {errorMsg ? (
        <div className="error-msg">
          No information found. <br />
          Please check your query was typed in correctly.
        </div>
      ) : (
        <div className="card">
          <div className="heading-text-container">
            <div className="card__heading">IP Address</div>
            <p className="card__text">{ipData.ip}</p>
          </div>
          <div className="heading-text-container">
            <div className="card__heading">Location</div>
            <p className="card__text">
              {ipData?.location?.city}, {ipData?.location?.region}
            </p>
          </div>
          <div className="heading-text-container">
            <div className="card__heading">Timezone</div>
            <p className="card__text">UTC {ipData?.location?.timezone}</p>
          </div>
          <div className="heading-text-container">
            <div className="card__heading">ISP</div>
            <p className="card__text">{ipData.isp}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default LocationDetails;
