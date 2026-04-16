import React, { useState } from 'react';

function App() {
  const [smsPhone, setSmsPhone] = useState('');
  const [smsMsg, setSmsMsg] = useState('');

  const handlePrint = () => {
    const url = `miter://print?company=Photon&place=Sindagi&total=500`;
    window.location.href = url;
  };

  const handleSMS = () => {
    if (!smsPhone || !smsMsg) {
      alert("Fill number and message");
      return;
    }

    const url = `miter://sms?phone=${smsPhone}&msg=${encodeURIComponent(smsMsg)}`;
    window.location.href = url;
  };

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>Miter Web Terminal</h1>

      <button onClick={handlePrint}>
        🖨️ Print
      </button>

      <br /><br />

      <input
        placeholder="Phone"
        value={smsPhone}
        onChange={(e) => setSmsPhone(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Message"
        value={smsMsg}
        onChange={(e) => setSmsMsg(e.target.value)}
      />

      <br />

      <button onClick={handleSMS}>
        💬 Send SMS
      </button>
    </div>
  );
}

export default App;
