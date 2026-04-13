import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

 const handleFetchAndPrint = async () => {
    setLoading(true);
    try {
      const response = {
        company : "Photon" , place : "sindagi" , mobile:"9632367397"
      }
      
      // // Check if the server returned an error (like 404 or 500)
      // if (!response.ok) {
      //   throw new Error(`Server error: ${response.status}. Check if the URL is correct.`);
      // }

      // const contentType = response.headers.get("content-type");
      // if (!contentType || !contentType.includes("application/json")) {
      //   throw new Error("Server did not return JSON. It returned HTML/Text instead.");
      // }

      // const realData = await response.json();
      const encodedData = encodeURIComponent(JSON.stringify(response));
      window.location.href = `miterprint://${encodedData}`;
      
    } catch (err) {
      alert("Print Error: " + err.message);
    } finally {
      setLoading(false);
    }
};
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h2>Miter Web Terminal</h2>
      <button 
        onClick={handleFetchAndPrint}
        style={{ padding: '20px 40px', fontSize: '18px', backgroundColor: 'red', color: 'white', borderRadius: '10px', border: 'none' }}
      >
        {loading ? 'Fetching DB...' : '🖨️ Print Latest Order'}
      </button>
    </div>
  );
}

export default App;
