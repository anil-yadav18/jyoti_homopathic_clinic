export default function Doctors() {
  return (
    <div className="relative py-14 px-4">

      {/* Background (soft clinic theme like hero) */}
      <div className="absolute inset-0 bg-green-900/10"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Doctor 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          {/* Card Background */}
          <div className="absolute inset-0 bg-green-900/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-10 p-7 text-white">

            <h3 className="text-xl md:text-2xl font-extrabold text-center">
              DR. Rajat Kushavaha
            </h3>

            <p className="text-center text-sm mt-1 text-gray-200 font-semibold">
              BHMS, MD (Hom), PGCSD, PGCCH
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-100">
              <span className="font-bold text-yellow-300">Specialist In:</span>{" "}
              Cancer Support, Piles, Joint Pain, Gout, Rheumatic Arthritis, Sciatica,
              Stone, Skin Disease, Neuro, Cyst & Fibroid, Liver, Gas / Acidity,
              Kidney Disease, Autism, Paralysis, Anxiety & All Chronic Diseases.
            </p>
          </div>

          {/* Bottom Transparent Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>

        </div>

        {/* Doctor 2 */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          {/* Card Background */}
          <div className="absolute inset-0 bg-green-900/85 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative z-10 p-7 text-white">

            <h3 className="text-xl md:text-2xl font-extrabold text-center">
              DR. Jyoti Kushavaha
            </h3>

            <p className="text-center text-sm mt-1 text-gray-200 font-semibold">
              BHMS, PGCSD, PGCCH
            </p>

            <p className="mt-5 text-sm leading-relaxed text-gray-100">
              <span className="font-bold text-yellow-300">Specialist In:</span>{" "}
              Piles, Joint Pain, Stone, Cyst & Fibroid, Liver, Gas / Acidity,
              and management of acute & chronic health conditions.
            </p>
          </div>

          {/* Bottom Transparent Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>

        </div>

      </div>
    </div>
  );
}