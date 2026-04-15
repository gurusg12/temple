import React, { useState } from 'react';

function App() {
  const [smsPhone, setSmsPhone] = useState('');
  const [smsMsg, setSmsMsg] = useState('');

  const handlePrint = () => {
    const data = { company: "Photon", place: "Sindagi", total: "₹500" };
    window.location.href = `miterprint://${encodeURIComponent(JSON.stringify(data))}`;
  };

  const handleSMS = () => {
    if(!smsPhone || !smsMsg) return alert("Fill number and message");
    const data = { phoneNumber: smsPhone, message: smsMsg };
    window.location.href = `mitersms://${encodeURIComponent(JSON.stringify(data))}`;
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1>Miter Web Terminal</h1>

      <div style={{ background: '#fff', padding: '20px', margin: '20px auto', maxWidth: '400px', borderRadius: '10px' }}>
        <h3>Printer Control</h3>
        <button onClick={handlePrint} style={{ background: '#2563eb', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          🖨️ Print Latest Order
        </button>
      </div>

      <div style={{ background: '#fff', padding: '20px', margin: '20px auto', maxWidth: '400px', borderRadius: '10px' }}>
        <h3>SMS Control</h3>
        <input 
          placeholder="Phone Number" 
          value={smsPhone} 
          onChange={(e) => setSmsPhone(e.target.value)}
          style={{ width: '90%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea 
          placeholder="Message content..." 
          value={smsMsg} 
          onChange={(e) => setSmsMsg(e.target.value)}
          style={{ width: '90%', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleSMS} style={{ background: '#ef4444', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          💬 Send SMS via Mobile
        </button>
      </div>
    </div>
  );
}

export default App;
