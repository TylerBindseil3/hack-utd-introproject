import React from "react";
 
function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-20 py-4">
      {/* TITLE */}
      <div className="text-orange text-3xl poppins-bold hover:text-pastelblue transition duration-300">Ripple & Refresh</div>
      {/* PAGES */}
      <div className="flex flex-row gap-8 poppins-semibold text-2xl text-darkblue">
        <p className="hover:text-pastelblue transition duration-300">map</p>
        <p className="hover:text-pastelblue transition duration-300">rsvp</p>
        <p className="hover:text-pastelblue transition duration-300">activity</p>
      </div>
    </div>
  );
}
 
export default Navbar;