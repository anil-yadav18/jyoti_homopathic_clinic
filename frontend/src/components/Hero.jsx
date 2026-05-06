export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580281657527-47f249e8f3c8?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center text-white">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Advanced Natural Healing Center
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-xl text-gray-100 px-2 sm:px-6">
          Experienced Homeopathic Care providing safe treatments for Cancer,
          Kidney & Chronic diseases with natural healing approach.
        </p>

        {/* WhatsApp Button */}
        <div className="mt-6 sm:mt-8">
          <a
            href="https://wa.me/919554058799?text=Hello%20Doctor%2C%20I%20want%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-green-700 font-semibold px-5 sm:px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
          >
            Confirm Appointment via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}