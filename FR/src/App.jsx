import React, { useState } from 'react';

function WebApp() {
  const [loading, setLoading] = useState(false);

  const handleFetchAndPrint = async () => {
    setLoading(true);
    try {
      // 1. Fetch real data from your Render Backend (DB)
      const response = await fetch('https://backend-bt-cd08.onrender.com/get-latest-order');
      const realData = await response.json();

      if (!realData) throw new Error("No data found");

      // 2. Encode the data for the URL Scheme
      const encodedData = encodeURIComponent(JSON.stringify(realData));
      
      // 3. Jump to the Native App
      window.location.href = `miterprint://${encodedData}`;
      
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h2>Miter Web Terminal</h2>
      <button 
        onClick={handleFetchAndPrint}
        style={{ padding: '20px 40px', fontSize: '18px', backgroundColor: '#22c55e', color: 'white', borderRadius: '10px', border: 'none' }}
      >
        {loading ? 'Fetching DB...' : '🖨️ Print Latest Order'}
      </button>
    </div>
  );
}

export default WebApp;
