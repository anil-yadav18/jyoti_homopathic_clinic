export default function Payment() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Pay Consultation Fee
      </h2>

      <div className="bg-white shadow-xl p-6 rounded-xl max-w-md mx-auto">
        <p className="text-lg mb-2">Consultation Fee: ₹200</p>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
}