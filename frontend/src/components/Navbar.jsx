export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      
      <div className="flex items-center justify-center gap-3 h-[80px] px-4">
        
        {/* Logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
          alt="logo"
          className="w-12 h-12 object-contain"
        />

        {/* Clinic Name */}
        <h1 className="text-xl md:text-2xl font-bold text-green-700 tracking-wide">
          Jyoti Homeopathic Clinic
        </h1>

      </div>

    </nav>
  );
}