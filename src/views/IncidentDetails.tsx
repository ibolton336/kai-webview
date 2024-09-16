import React, { useEffect, useState } from "react";

export const IncidentDetails: React.FC = () => {
  const [incidentMessage, setIncidentMessage] = useState("");

  useEffect(() => {
    window.addEventListener("message", (event) => {
      const message = event.data;
      if (message.type === "showIncidentDetails") {
        setIncidentMessage(message.message);
      }
    });
  }, []);

  return (
    <div>
      <h2>Incident Details</h2>
      {incidentMessage ? (
        <p>{incidentMessage}</p>
      ) : (
        <p>No incident selected.</p>
      )}
    </div>
  );
};
