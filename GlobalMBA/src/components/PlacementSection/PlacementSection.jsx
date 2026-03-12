import React from "react";

const PlacementSection = () =>{
return(
<section>
    <div className="px-4 lg:px-8 g:px-20 pt-12 pb-6">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 flex flex-col items-start mb-8 lg:mb-0">
                <p className="px-4 py-1 bg-yellow-500 text-white text-sm mb-4">Career Success</p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-blue-950">Record Breaking Placement 2025</h2>
                <p className="text-justify text-lg">Our students consistently secure placements with leading organizations across industries. With strong
                    industry partnerships, skill-focused training, and career mentorship, NIMS University ensures
                    graduates are job-ready and confident to succeed in a competitive global workforce.</p>
            </div>
            <div className="w-full lg:w-6/12 flex flex-wrap items-start lg:ps-10">
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/01.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">49 LPA</p>
                    </div>
                </div>
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/02.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">43 LPA</p>
                    </div>
                </div>
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/03.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">40 LPA</p>
                    </div>
                </div>
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/04.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">33 LPA</p>
                    </div>
                </div>
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/05.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">28 LPA</p>
                    </div>
                </div>
                <div className="w-6/12 lg:w-4/12 mb-4 px-2">
                    <div className="border rounded-md flex flex-col items-center">
                        <img src="./placement/06.png" className="px-8 pt-2 object-contain h-[80px] lg:h-[70px] " alt="" />
                        <p className="text-center font-bold text-3xl lg:text-4xl w-full bg-red-800 text-white py-2">26 LPA</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <img src="./placement/1.png" className="w-full hidden lg:block" alt="" />
            <img src="./placement/2.png" className="w-full lg:hidden" alt="" />
        </div>
    </div>
</section>
);
}

export default PlacementSection;