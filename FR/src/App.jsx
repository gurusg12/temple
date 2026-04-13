import React, { useState } from 'react';

const RENDER_URL = "https://backend-bt-cd08.onrender.com";

function Website() {
  const [loading, setLoading] = useState(false);

  const startAutoPrintProcess = async () => {
    setLoading(true);
    try {
      // 1. Fetch data from DB (via Render)
      const dbResponse = await fetch(`${RENDER_URL}/get-db-data`);
      const dataFromDB = await dbResponse.json();

      // 2. Immediately send it back to the "App Mailbox"
      await fetch(`${RENDER_URL}/push-to-app`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataFromDB)
      });

      alert("Data fetched from DB and sent to local App!");
    } catch (e) {
      alert("Error in bridge");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <button 
        onClick={startAutoPrintProcess}
        style={{ padding: '20px', background: 'blue', color: 'white' }}
      >
        {loading ? "Processing..." : "Fetch DB & Print"}
      </button>
    </div>
  );
}
export default Website;
