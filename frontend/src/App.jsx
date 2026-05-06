import Navbar from "./components/Navbar";
import TopInfo from "./components/TopInfo";
import Hero from "./components/Hero";
import Doctors from "./components/Doctors";
import Treatments from "./components/Treatments";
import Testimonial from"./components/Testimonial"
import Appointment from "./components/Appointment";

import Footer from "./components/Footer";
import CallButton from "./components/CallButton";
import DoctorChat from "./components/DoctorChat";
function App() {
  return (
    <>
      <Navbar />
      <TopInfo />   {/* 👈 यहाँ add किया */}
      <Hero />
     
      <Doctors />
       <Treatments />
       <Testimonial />
      <Appointment />
    
      <Footer />

      {/* 👇 यह div footer के नीचे space देगा */}
<div className="h-[90px]"></div>
      <CallButton />
      <DoctorChat />
    </>
  );
}

export default App;