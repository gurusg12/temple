import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Idle');

  const fetchAndPrint = async () => {
    setStatus('Fetching from Backend...');
    try {
      // 1. FETCH ACTUAL DATA FROM YOUR BACKEND
      // Replace this URL with your actual database fetch endpoint
      const response = await fetch('https://backend-bt-cd08.onrender.com/get-latest-order'); 
      const dbData = await response.json();

      if (!dbData) {
        setStatus('No data found in DB');
        return;
      }

      setStatus('Data Fetched! Sending to App...');

      // 2. CONVERT DB DATA TO LOCAL LINK
      const encodedData = encodeURIComponent(JSON.stringify(dbData));
      
      // 3. TRIGGER LOCAL APP (This jumps to your React Native App)
      window.location.href = `miterprint://${encodedData}`;
      
      setStatus('Sent to Printer');
    } catch (error) {
      console.error(error);
      setStatus('Error fetching data');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', background: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>Miter Terminal</h1>
      <p>Status: <strong>{status}</strong></p>
      
      <button 
        onClick={fetchAndPrint}
        style={{
          padding: '20px 40px',
          fontSize: '18px',
          backgroundColor: '#22c55e',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🖨️ Fetch from DB & Print
      </button>
    </div>
  );
}

export default App;
