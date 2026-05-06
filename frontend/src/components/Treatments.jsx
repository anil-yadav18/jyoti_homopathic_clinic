export default function Treatments() {
  const data = [
    {
      label: "Cyst",
      title: "Cyst & Fibroid",
      desc: "Safe treatment to shrink cysts and fibroids from the roots.",
      img: "https://images.unsplash.com/photo-1580281657521-7c503c1f4b02?q=80&w=800", // surgery / medical
    },
    {
      label: "Liver",
      title: "Gas & Liver",
      desc: "Improves digestion, treats acidity, and restores liver health.",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800", // pills / digestion
    },
    {
      label: "Joint",
      title: "Joint Pain",
      desc: "Relieves inflammation and improves joint mobility naturally.",
      img: "https://images.unsplash.com/photo-1588774069410-84ae30757c8e?q=80&w=800", // joint pain
    },
    {
      label: "Cancer",
      title: "Cancer Support",
      desc: "Supportive care to improve immunity and manage symptoms.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800", // cancer care
    },
    {
      label: "Skin",
      title: "Skin Diseases",
      desc: "Treatments for Psoriasis, Eczema, Acne without steroids.",
      img: "https://images.unsplash.com/photo-1598449426314-8b02525e8733?q=80&w=800", // skin care
    },
    {
      label: "Hair",
      title: "Hair Fall",
      desc: "Natural regrowth and hair root strengthening.",
      img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800", // hair care
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-100">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-14">
        Our Comprehensive Treatments
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              
              {/* Label */}
              <p className="text-blue-600 font-semibold text-sm">
                {item.label}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-800 mt-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}