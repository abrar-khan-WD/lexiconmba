import React from "react";
import { useEnquireModal } from "../contexts/EnquireModalContext";

const CTASection = () => {
const { openModal } = useEnquireModal();

return (
<section className=" pb-12 lg:px-20 px-4">
    <div className="relative rounded-lg overflow-hidden p-4 lg:p-8">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('./hero/1.png')",
        }}></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 ">
            <div className="w-full flex justify-center flex-wrap">
                {/* Quote */}
                <blockquote className="text-white text-2xl lg:text-4xl font-bold leading-tight w-full lg:w-8/12 text-start mb-4 lg:mb-0">
                    Collaboration is key. In the MBA Global program, we break down borders and build connections that
                    last a lifetime
                </blockquote>
                <div className="w-full lg:w-4/12 flex items-center lg:justify-end justify-center">
                
                {/* CTA Button */}
                <button onClick={openModal}
                    className="inline-block bg-[#F6B700] hover:bg-[#e5a600] text-black font-semibold px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
                    Enquire Now
                </button></div>
            </div>
        </div>

    </div>
</section>
);
};

export default CTASection;