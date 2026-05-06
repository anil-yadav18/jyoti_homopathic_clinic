export default function Footer() {
  return (
    <div className="bg-[#2f3e4e] text-white pt-12 pb-20 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h3 className="text-green-400 text-lg font-semibold mb-3">
            1. Jyoti Homiyopathic Clinic
          </h3>

          <p className="text-gray-300 mb-3 flex items-start gap-2">
            📍
            <span>Nawab Yusuf Road, Civil Lines, Prayagraj, UP, India</span>
          </p>

          {/* Phone */}
          <p className="text-gray-300 mb-2 flex items-center gap-2">
            📞
            <span>+91 8318713873</span>
          </p>

          {/* Email */}
          <p className="text-gray-300 mb-4 flex items-center gap-2 break-all">
            📧
            <span>rajatkushavaha@gmail.com</span>
          </p>

          <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md text-sm font-medium">
            ➤ Get Directions
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-green-400 text-lg font-semibold mb-3">
            2. Branch Clinic
          </h3>

          <p className="text-gray-300 mb-3 flex items-start gap-2">
            📍
            <span>Naini, Prayagraj, UP, India</span>
          </p>

          {/* Phone */}
          <p className="text-gray-300 mb-2 flex items-center gap-2">
            📞
            <span>+91 8081026053</span>
          </p>

          {/* Email */}
          <p className="text-gray-300 mb-4 flex items-center gap-2 break-all">
            📧
            <span>rajatkushavaha@gmail.com</span>
          </p>

          <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-md text-sm font-medium">
            ➤ Get Directions
          </button>
        </div>
      </div>

      {/* Bottom */}
      <p className="text-center text-gray-400 mt-12 text-sm">
        © 2026 Jyoti Homiyopathic Clinic. All Rights Reserved.
      </p>
    </div>
  );
}