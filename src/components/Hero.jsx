import React from "react";
 
function Hero() {
    return (
        <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-10">
            {/* TITLE */}
            <h1 className="text-4xl poppins-bold text-orange">Your Picnic</h1>
            <hr className="mb-6 mt-4 w-1/3 border-orange" />
 
            {/* BOX */}
            <div className="bg-gradient-to-r from-orange to-pastelblue rounded-3xl relative mx-auto flex h-fit w-fit flex-col p-1">
                {/* Inner White Box with Shadow */}
                <div className="p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl"> {/* This Div is an extra layer that will be used for a cool effect later */}
                    <div className="flex items-center">
                        {/* Location Image with Hover Effect */}
                        <img
                            className="w-1/2 pr-8 object-cover rounded-2xl shadow-md transition-transform duration-500 hover:rotate-3 hover:scale-110"
                            src="images/Texarkana.jpg"
                            alt="Lake Texarkana"
                        />
 
                        {/* TEXT */}
                        <div className="w-1/2 space-y-6 text-darkblue">
                            {/* Location Title */}
                            <h1 className = "text-3xl text-darkblue drop-shadow-lg poppins-extrabold " >Lake Texarkana</h1>
                            {/* RSVP Details */}
                            <p className = "text-gray-500 text-2xl inter-regular">4 Going | 3 Unsure</p>
                            {/* Picnic Description */}
                            <p className = "text-orange inter-regular">
                                Time for a day of relaxation on the lake. Bring
                                a floatie and a swimsuit!
                            </p>
                            <p className="pt-4">going</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;
 