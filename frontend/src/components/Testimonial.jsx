export default function Testimonial() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#dbeafe] to-[#e0f2fe] text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16">
        <span className="text-blue-800">Patient </span>
        <span className="text-green-500">Success Stories</span>
      </h2>

      {/* Card */}
      <div className="relative max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-10">

        {/* Profile Icon (Top Center Floating) */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-white text-3xl">👤</span>
          </div>
        </div>

        {/* Stars */}
        <div className="text-yellow-400 text-2xl mt-6 mb-4">
          ★★★★★
        </div>

        {/* Quote */}
        <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
          "Chronic skin allergies cured completely. Highly recommended!"
        </p>

        {/* Name */}
        <h3 className="text-blue-800 font-semibold text-lg">
          - Anil Singh 
        </h3>

      </div>

    </div>
  );
}