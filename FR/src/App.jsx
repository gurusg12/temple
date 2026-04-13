import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('Idle');

  // IMPORTANT: Since Vercel is HTTPS and your local backend is HTTP,
  // some browsers might block this. Use your computer's public IP or 
  // a tool like Ngrok if testing from a different network.
  const LOCAL_BACKEND_URL = "https://backend-bt-cd08.onrender.com/print-job";

  const handlePrintTrigger = async () => {
    setStatus('Sending Print Command...');
    try {
      // We call the backend to "queue" the data
      const response = await fetch(LOCAL_BACKEND_URL);
      if (response.ok) {
        setStatus('Print Job Sent to Backend!');
        alert("Print command sent to your local server!");
      }
    } catch (error) {
      setStatus('Error: Could not reach backend');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      <h1>Miter Web Terminal</h1>
      <p>Status: <strong>{status}</strong></p>
      
      <button 
        onClick={handlePrintTrigger}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#22c55e',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🖨️ Click to Print Receipt
      </button>

      <div style={{ marginTop: '20px', color: '#64748b' }}>
        <p>This website sends data to your local backend at:</p>
        <code>{LOCAL_BACKEND_URL}</code>
      </div>
    </div>
  );
}

export default App;
