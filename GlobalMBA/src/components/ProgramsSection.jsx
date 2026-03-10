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
      "base": "flex items-center justify-center rounded-t-lg p-8 w-[24%] !ms-0 bg-yellow-200 hover:bg-gray-100text-sm font-medium focus:outline-none",
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
            name: "1 Diploma Courses",
            description: "Short-term specialized programs for professional skills",
            icon: "/programs/icons/1.png",
            content: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti delectus obcaecati. Quibusdam voluptas blanditiis doloremque ratione sint. Amet soluta consequuntur, nihil in animi error quia ipsum eius voluptates laudantium?"
        },
        {
            name: "2 Diploma Courses",
            description: "Short-term specialized programs for professional skills",
            icon: "/programs/icons/1.png",
            content: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti delectus obcaecati. Quibusdam voluptas blanditiis doloremque ratione sint. Amet soluta consequuntur, nihil in animi error quia ipsum eius voluptates laudantium?"
        },
        {
            name: "3 Diploma Courses",
            description: "Short-term specialized programs for professional skills",
            icon: "/programs/icons/1.png",
            content: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti delectus obcaecati. Quibusdam voluptas blanditiis doloremque ratione sint. Amet soluta consequuntur, nihil in animi error quia ipsum eius voluptates laudantium?"
        },
        {
            name: "4 Diploma Courses",
            description: "Short-term specialized programs for professional skills",
            icon: "/programs/icons/1.png",
            content: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti delectus obcaecati. Quibusdam voluptas blanditiis doloremque ratione sint. Amet soluta consequuntur, nihil in animi error quia ipsum eius voluptates laudantium?"
        },
    ];
return(
<section>
    <div className="bg-yellow-100 max-w-8xl mx-auto py-12 px-14">
        <p className='bg-red-700 py-1 px-2 w-fit rounded-[4px] text-white text-sm mb-4'>Academic Catalog</p>
        
        <h2 className='text-4xl font-bold mb-2'>World-Class Curriculum</h2>
        <p className='text-md font-light mb-8'>Explore our diverse range of 80+ programs designed to empower the next generation of global leaders</p>
        <Tabs theme={customTheme} className='flex flex-wrap w-full' aria-label="Pills" variant="pills">
            {programs.map((program, index) => (
                <TabItem key={index} className='p-0' active title={
                <div className='text-black flex flex-col justify-center items-start'>
                    <img src={program.icon} className='w-14' alt="" />
                    <h4 className='text-xl mt-2'>{program.name}</h4>
                    <p className='text-sm font-normal text-left'>{program.description}</p>
                    <div className="flex justify-between items-center w-full mt-4">
                        <p>View Course List</p>
                        <BsArrowRight />
                    </div>
                </div>
            }>
                <div className="bg-white rounded-md p-8">
                    {program.content}
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