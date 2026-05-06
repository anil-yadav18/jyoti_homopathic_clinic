import { useState } from "react";

export default function DoctorChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phone = "919554058799";

  const sendMessage = (text) => {
    const msg = text || message;
    if (!msg.trim()) return;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Chat Box */}
      {open && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden mb-3">

          {/* Header */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm">
                Jyoti Homiyopathic Clinic
              </h3>
              <p className="text-xs">🟢 Online | Chat Support</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-white font-bold"
            >
              ✖
            </button>
          </div>

          {/* Body */}
          <div className="p-3 text-sm bg-gray-50">

            <p className="mb-3 text-gray-700">
              Welcome to Jyoti Homiyopathic Clinic. How may I help you today?
            </p>

            {/* Quick Buttons */}
            <div className="flex flex-col gap-2 mb-3">

              <button
                onClick={() =>
                  sendMessage("Hello Doctor, I want to book an appointment")
                }
                className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-600"
              >
                Book Appointment
              </button>

              <button
                onClick={() =>
                  sendMessage("Hello Doctor, please share clinic location")
                }
                className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-600"
              >
                Locate Clinic
              </button>

              <button
                onClick={() =>
                  sendMessage("Hello Doctor, I request a call back")
                }
                className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-green-600"
              >
                Request Call Back
              </button>

            </div>

            {/* Input */}
            <div className="flex gap-2">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type message..."
                className="flex-1 border rounded-lg px-2 py-2 text-xs outline-none"
              />

              <button
                onClick={() => sendMessage()}
                className="bg-green-600 text-white px-3 rounded-lg text-xs font-semibold"
              >
                Send
              </button>

            </div>

          </div>
        </div>
      )}

      {/* Floating Doctor Button (FIXED) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-xl overflow-hidden border-2 border-green-500 ring-2 ring-green-200 bg-white"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
          alt="Doctor"
          className="w-full h-full object-cover"
        />
      </button>

    </div>
  );
}