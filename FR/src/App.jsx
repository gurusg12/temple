import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

 const handleFetchAndPrint = async () => {
    setLoading(true);
    try {
 const data = {
  company: "Photon",
  place: "Sindagi",
  mobile: "9632367397",
};

console.log("Sending:", data);

const encodedData = encodeURIComponent(JSON.stringify(data));
const url = `miterprint://${encodedData}`;

console.log("URL:", url);

window.location.href = url;
      
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
        style={{ padding: '20px 40px', fontSize: '18px', backgroundColor: 'blue', color: 'white', borderRadius: '10px', border: 'none' }}
      >
        {loading ? 'Fetching DB...' : '🖨️ Print Latest Order'}
      </button>
    </div>
  );
}

export default App;
