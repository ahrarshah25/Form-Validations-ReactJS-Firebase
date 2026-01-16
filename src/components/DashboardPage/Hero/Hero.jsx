import React from "react";
import Navbar from "../../LandingPage/Navbar/Navbar";
import Welcome from "./Welcome";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <Navbar />

      <section className="relative px-4 py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <span className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
          <span className="absolute top-1/3 right-32 w-4 h-4 bg-blue-300 rounded-full animate-bounce" />
          <span className="absolute bottom-24 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        </div>

        <div className="relative max-w-6xl mx-auto rounded-3xl bg-white/90 backdrop-blur p-6 sm:p-12 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 rounded-3xl bg-blue-500 opacity-0 hover:opacity-10 transition" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <Welcome />
            <div className="flex justify-center md:justify-end">
              <ProfileImage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
