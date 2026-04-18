import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [printText, setPrintText] = useState("");

  // 🔗 Send Deep Link
  const sendToApp = (data) => {
    const url = `miterprint://${encodeURIComponent(JSON.stringify(data))}`;
    window.location.href = url;
  };

  // 📩 Send SMS
  const handleSendSMS = () => {
    if (!number || !message) {
      alert("Enter number and message");
      return;
    }

    sendToApp({
      action: "sms",
      number,
      message,
    });
  };

  // 🖨️ Send Print
  const handlePrint = () => {
    if (!printText) {
      alert("Enter print content");
      return;
    }

    sendToApp({
      action: "print",
      text: printText,
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Miter Print Web Panel</h1>

      {/* SMS SECTION */}
      <div style={styles.card}>
        <h2>Send SMS</h2>

        <input
          style={styles.input}
          placeholder="Mobile Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <textarea
          style={styles.textarea}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button style={styles.button} onClick={handleSendSMS}>
          Send SMS
        </button>
      </div>

      {/* PRINT SECTION */}
      <div style={styles.card}>
        <h2>Print Receipt</h2>

        <textarea
          style={styles.textarea}
          placeholder="Enter print text..."
          value={printText}
          onChange={(e) => setPrintText(e.target.value)}
        />

        <button style={styles.button} onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    fontFamily: "Arial",
    backgroundColor: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },
  title: {
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    border: "none",
  },
  textarea: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    border: "none",
    minHeight: 80,
  },
  button: {
    marginTop: 15,
    padding: 12,
    width: "100%",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
};

export default App;
