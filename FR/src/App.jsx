import React, { useState } from 'react';

const App = () => {
  const [smsPhone, setSmsPhone] = useState('');
  const [smsMsg, setSmsMsg] = useState('');

  // Triggers the Silent Background SMS on the Phone
  const handleSilentSMS = () => {
    if (!smsPhone || !smsMsg) {
      return alert("Please enter both phone number and message.");
    }

    // This object structure must match the mobile app's data.phoneNumber / data.message
    const smsData = {
      phoneNumber: smsPhone,
      message: smsMsg
    };

    const encodedData = encodeURIComponent(JSON.stringify(smsData));
    const finalUrl = `mitersms://${encodedData}`;

    console.log("Triggering Deep Link:", finalUrl);
    window.location.href = finalUrl;
  };

  // Triggers the Printer on the Phone
  const handlePrint = () => {
    const printData = {
      title: "MITER BILL",
      item: "Software Service",
      amount: "₹1500",
      status: "PAID"
    };

    const encodedData = encodeURIComponent(JSON.stringify(printData));
    window.location.href = `miterprint://${encodedData}`;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Miter Web Terminal</h1>
        <p style={styles.subtitle}>Control your mobile hardware from the browser</p>

        {/* SMS SECTION */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Background SMS</h2>
          <input
            type="text"
            placeholder="Phone Number (e.g. 91...)"
            value={smsPhone}
            onChange={(e) => setSmsPhone(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Message content..."
            value={smsMsg}
            onChange={(e) => setSmsMsg(e.target.value)}
            style={{ ...styles.input, height: '80px', resize: 'none' }}
          />
          <button onClick={handleSilentSMS} style={styles.smsButton}>
            🚀 Send SMS Silently
          </button>
        </div>

        {/* PRINTER SECTION */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Printer Control</h2>
          <button onClick={handlePrint} style={styles.printButton}>
            🖨️ Print Test Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: { backgroundColor: '#0f172a', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif', color: 'white' },
  container: { maxWidth: '500px', margin: '0 auto' },
  title: { textAlign: 'center', fontSize: '2rem', marginBottom: '10px' },
  subtitle: { textAlign: 'center', color: '#94a3b8', marginBottom: '40px' },
  card: { backgroundColor: '#1e293b', padding: '25px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
  cardTitle: { marginTop: 0, fontSize: '1.2rem', marginBottom: '15px', color: '#38bdf8' },
  input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #334155', backgroundColor: '#0f172a', color: 'white', boxSizing: 'border-box' },
  smsButton: { width: '100%', padding: '15px', border: 'none', borderRadius: '8px', backgroundColor: '#ef4444', color: 'white', fontWeight: 'bold', cursor: 'pointer' },
  printButton: { width: '100%', padding: '15px', border: 'none', borderRadius: '8px', backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', cursor: 'pointer' }
};

export default App;
