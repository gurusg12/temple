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
    <div className="min-h-screen bg-slate-900 text-white p-6 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
          Miter Print Web Panel
        </h1>

        {/* SMS SECTION */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg mb-6 border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📩</span> Send SMS
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="Mobile Number (e.g. +123456789)"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <textarea
              className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[100px]"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleSendSMS}
              className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
            >
              Send SMS
            </button>
          </div>
        </div>

        {/* PRINT SECTION */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>🖨️</span> Print Receipt
          </h2>

          <div className="space-y-4">
            <textarea
              className="w-full p-3 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px]"
              placeholder="Enter text to print..."
              value={printText}
              onChange={(e) => setPrintText(e.target.value)}
            />

            <button
              onClick={handlePrint}
              className="w-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors shadow-md"
            >
              Print Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
