import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[conic-gradient(from_50deg_at_72.7%_50%,_#000_181.3160472972973deg,_#0e0e0e_360deg)] text-white overflow-hidden">
      {/* Mobile background image */}
      <div className="absolute inset-0 md:hidden bg-cover bg-end opacity-30 bg-[url(https://framerusercontent.com/images/XlHLSgpgKzCaz8XBm1wqD0viPLE.png)]"></div>

      <div className="container lg:w-[90%] mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-end md:justify-center min-h-screen relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className=" text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl">
                <span className="bg-[linear-gradient(0deg,rgba(4,4,4,0)0%,rgb(239,183,87)45.499%,rgb(251,246,199)100%)] bg-clip-text text-transparent font-extrabold text-[31px] xl:text-[51px]">
                Elite Health Coaching
                </span>
                <br />
                <span className="text-white font-bold mt-3 text-[51px]">For High Performers</span>
            </h1>
            <p className="text-[rgb(209,209,209)] text-xl max-w-md mx-auto md:mx-0">
                Trusted by executives at billion-dollar companies like McKinsey, Accenture, Amazon, Tinder, Shopify & Meta
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
                {/* Avatar list */}
                <div className="flex -space-x-2">
                {["1", "2", "3", "4", "5", "6"].map((id) => (
                    <img
                    key={id}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://randomuser.me/api/portraits/men/${id}1.jpg`}
                    alt="CEO"
                    />
                ))}
                </div>
                <span className="text-sm text-white font-medium ml-2">500+ Happy CEOs</span>
            </div>
            <button className="cursor-pointer mt-4 px-12 py-3 bg-[linear-gradient(270deg,#efb757,#fbf6c7)] text-[rgb(38,38,38)] font-bold rounded-xl">
                Join The Elite
            </button>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block md:w-1/2">
          <img src="https://framerusercontent.com/images/XlHLSgpgKzCaz8XBm1wqD0viPLE.png" alt="Coach" className="w-full max-h-screen object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
