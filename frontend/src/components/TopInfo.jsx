export default function TopInfo() {
  return (
    <div className="relative w-full mt-16">

      {/* Background */}
      <div className="absolute inset-0 bg-green-900/90 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-white">

          <div className="flex items-center gap-2">
            <span className="text-yellow-300">✔</span>
            <span className="uppercase">ISO Certified Clinic</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-300">💊</span>
            <span className="uppercase">Expert Homoeopathic Care</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-300">🕒</span>
            <span className="uppercase">Mon-Sun: 10 AM - 9 PM</span>
          </div>

        </div>

      </div>
    </div>
  );
}