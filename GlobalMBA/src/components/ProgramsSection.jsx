import React from 'react';
import { TabItem, Tabs } from "flowbite-react";
import { BsArrowRight } from "react-icons/bs";

const customTheme = {
  "base": "flex flex-col gap-2",
  "tablist": {
    "base": "flex text-center gap-3",
    "variant": {
      "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
      "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      "pills": "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    "tabitem": {
      "base": "flex items-center justify-start rounded-t-lg p-8 w-full lg:w-[24%] !ms-0 bg-yellow-200 hover:bg-gray-100text-sm font-medium focus:outline-none",
      "variant": {
        "default": {
          "base": "rounded-t-lg",
          "active": {
            "on": "bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500",
            "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        },
        "underline": {
          "base": "rounded-t-lg",
          "active": {
            "on": "rounded-t-lg border-b-2 border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500",
            "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        "pills": {
          "base": "",
          "active": {
            "on": "rounded-lg bg-white text-black",
            "off": "rounded-lg hover:bg-white "
          }
        },
        "fullWidth": {
          "base": "ml-0 flex w-full rounded-none first:ml-0",
          "active": {
            "on": "rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            "off": "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      "icon": "mr-2 h-5 w-5"
    }
  },
  "tabitemcontainer": {
    "base": "",
    "variant": {
      "default": "",
      "underline": "",
      "pills": "",
      "fullWidth": ""
    }
  },
  "tabpanel": "py-3"
};

const ProgramsSection = () =>{

    const programs = [
        {
            name: "MARKETING",
            description: "Global Marketing & Communications",
            icon: "/programs/icons/1.png",
            content: [
                "Global Marketing & Communications",
                "Future Challenges & Trends in Marketing",
                "Strategic Digital Marketing",
                "International Marketing"
            ]
        },
        {
            name: "HUMAN RESOURCES",
            description: "Organizational Behavior & HRM Leadership",
            icon: "/programs/icons/2.png",
            content: [
                "Organizational Behavior & HRM Leadership",
                "Learning & Development",
                "Business Ethics & Governance"
            ]
        },
        {
            name: "FINANCE",
            description: "Financial Statement Analysis",
            icon: "/programs/icons/3.png",
            content: [
                "Financial Statement Analysis",
                "Financial Management",
                "Capital Investment Appraisal Techniques",
                "Budgetary Management & Control"
            ]
            
        },
        {
            name: "BUSINESS STRATEGY",
            description: "Introduction to Business Strategy",
            icon: "/programs/icons/4.png",
            content: [
                "Introduction to Business Strategy",
                "Strategic Management",
                "Strategic Digital Marketing",
                "International Marketing"
            ]
        },
    ];
return(
<section>
    <div className="bg-yellow-100 max-w-8xl mx-auto py-12 lg:px-14 px-4">
        <p className='bg-red-700 py-1 px-2 w-fit rounded-[4px] text-white text-sm mb-4'>Curriculum & Pedagogy</p>
        
        <h2 className='lg:text-5xl text-4xl font-bold mb-2 text-[#243b5e]'>Program Offered</h2>
        <p className='text-md font-light mb-4'>PROGRAM IN ACADEMIC PARTNERSHIP WITH UNIVERSITY OF SOUTH WALES, UK</p>

        <p className="text-3xl font-bold mb-4 text-blue-950">Master in Business Administration Global, (60 +120 credits)</p>
                <p className="text-sm font-normal mb-8 text-justify">The University of South Wales, in association with the
                    Lexicon Management Institute of Leadership and
                    Excellence, offer MBA Global Program that provides you with an opportunity to gain three to four
                    months
                    internship experience with companies in the UK and overseas. The Master's program is curated in academic partnership
                    with the University of South Wales (USW), UK,
                    accredited and recognized by the Privy Council. Educational programs at USW are UK-certified
                    educational
                    programs by Quality Assurance Agency.</p>
        <Tabs theme={customTheme} className='flex flex-wrap w-full' aria-label="Pills" variant="pills">
            {programs.map((program, index) => (
                <TabItem key={index} className='p-0' active title={
                <div className='text-black flex flex-col justify-center items-start'>
                    <img src={program.icon} className='w-14' alt="" />
                    <h4 className='text-xl mt-2'>{program.name}</h4>
                    <p className='text-sm font-normal text-left'>{program.description}</p>
                    <div className="flex justify-between items-center w-full mt-4">
                        <p>View Details</p>
                        <BsArrowRight />
                    </div>
                </div>
            }>
                <div className="bg-white rounded-md overflow-hidden relative">
                   <div className="flex flex-wrap lg:ps-8 p-8 pb-0">
                        <div className="w-full lg:w-4/12 mb-4 lg:mb-0 lg:py-8 py-0">
                            <h4 className='text-lg font-bold mb-3'>Lexicon Phase (India - 60 Credits):</h4>
                            <ul className='list-disc ps-6'>
                                {program.content.map((item, idx) => (
                                    <li key={idx} className="text-sm mb-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/12 justify-center py-8 hidden lg:flex">
                            <div className="w-[1px] bg-gray-300 h-full"></div>
                        </div>
                        <div className="w-full lg:w-5/12 lg:py-8 pb-8">
                                <h4 className='text-lg font-bold mb-3'>USW Phase (UK - 120 Credits):</h4>
                                <ul className='list-disc ps-6'>
                                    <li>Global Strategy & Decision-Making</li>
                                    <li>Project Management & Consultancy Skills</li>
                                    <li>Global Challenges & Responsible Management</li>
                                    <li>Capstone Project</li>
                                    <li>Work Placement</li>
                                    <li>Responsible Management & ESG:
                                        <ul>
                                            <li>A distinctive thread running through both phases, aligned with UN SDGs.</li>
                                        </ul>
                                    </li>
                                </ul>
                        </div>
                        <div className="w-full lg:w-2/12">
                                <div className="flex justify-end items-end h-full">
                                    <img src="./programs/placeholder.png" className='w-full h-auto object-contain' alt="" />
                                </div>
                        </div>
                   </div>
                        {/* <div className="absolute bottom-0 right-0 w-full flex justify-end items-end ">
                            <div className="w-2/12">
                                <img src="./programs/placeholder.png" className='w-full h-auto object-contain' alt="" />
                            </div>
                        </div> */}
                </div>

                </TabItem>
            ))}
            </Tabs>
                
            {/* <TabItem className='p-0' active title={
                <div className='bg-white rounded-md text-black p-8 flex flex-col justify-center items-start'>
                    <img src="/programs/icons/1.png" className='w-14' alt="" />
                    <h4 className='text-xl mt-2'>Diploma Courses</h4>
                    <p className='text-sm font-normal'>Short-term specialized programs for professional skills</p>
                    <div className="flex justify-between items-center w-full mt-4">
                        <p>View Course List</p>
                        <BsArrowRight />
                    </div>
                </div>
            }>
                <div className="bg-white rounded-md p-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti delectus obcaecati. Quibusdam voluptas blanditiis doloremque ratione sint. Amet soluta consequuntur, nihil in animi error quia ipsum eius voluptates laudantium?
                </div>
            </TabItem> */}
        
    </div>
</section>
);
}

export default ProgramsSection;