import React from 'react';
import { TabItem, Tabs } from "flowbite-react";
import { BsArrowRight } from "react-icons/bs";

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
        <p className='text-md font-light'>Explore our diverse range of 80+ programs designed to empower the next generation of global leaders</p>
        <Tabs className='flex flex-wrap w-full' aria-label="Pills" variant="pills">
            {programs.map((program, index) => (
                <TabItem key={index} className='p-0' active title={
                <div className='bg-white rounded-md text-black p-8 flex flex-col justify-center items-start'>
                    <img src={program.icon} className='w-14' alt="" />
                    <h4 className='text-xl mt-2'>{program.name}</h4>
                    <p className='text-sm font-normal'>{program.description}</p>
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