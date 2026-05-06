import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    issue: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    const msg = `Hello Doctor,
Name: ${form.name}
Mobile: ${form.mobile}
Issue: ${form.issue}
I have completed payment.`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`
    );
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-green-50 to-blue-50">
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Book an Appointment
        </h2>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        <textarea
          name="issue"
          placeholder="Briefly describe your health issue..."
          rows="4"
          className="w-full mb-4 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
          onChange={handleChange}
        />

        {/* Price */}
        <p className="text-green-700 font-semibold text-center mb-6">
          Get a detailed Consultation at just ₹500/-
        </p>

        {/* Payment Section */}
        <div className="bg-blue-50 p-6 rounded-2xl text-center mb-6 border border-blue-200">

          <h3 className="text-lg font-bold text-blue-800 mb-2">
            Pay via PhonePe / UPI
          </h3>

          <p className="text-gray-600 mb-3">
            Scan this QR to pay:
          </p>

          {/* QR */}
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=roshansingh@idbi"
            alt="QR"
            className="mx-auto mb-4"
          />

          <p className="font-semibold text-gray-700">
            UPI ID: roshansingh@idbi
          </p>

          <p className="text-2xl font-bold text-green-700 my-2">
            ₹500
          </p>

          <p className="text-sm text-gray-600 mb-4">
            Bank Info
          </p>

          {/* Custom Upload Button */}
          <label className="block w-full cursor-pointer bg-white border-2 border-dashed border-blue-300 rounded-xl p-4 text-center hover:bg-blue-100 transition">
            
            <span className="text-blue-700 font-semibold">
              UPLOAD PAYMENT RECEIPT
            </span>

            <input
              type="file"
              name="file"
              className="hidden"
              onChange={handleChange}
            />
          </label>

          {/* File Name */}
          <p className="text-sm text-gray-500 mt-2">
            {form.file ? form.file.name : "No file selected"}
          </p>

        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Confirm Appointment via WhatsApp
        </button>

      </div>

    </div>
  );
}