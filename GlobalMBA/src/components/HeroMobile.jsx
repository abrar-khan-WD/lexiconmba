import React from "react";
import bgImage from "../assets/hero/hero-mobile.png"
import "./HeroDesktop.css"
import {NpfWidget} from "./npfWidget"

export const HeroMobile = () => {
    return (
       <div className = "hero-mobile flex flex-col text-center min-h-screen gap-4">
         <img src= {bgImage} alt="Image Not Found" />
         <div className="px-2">
          <div className="p-4 border rounded-md">
            <NpfWidget />
          </div>
              
         </div>
        
       </div>
            
       
    )
}