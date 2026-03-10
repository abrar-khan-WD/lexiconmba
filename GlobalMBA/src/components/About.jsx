import React from "react";
import "./About.css";
import aboutImg from "../assets/about/about-img.png"

export const About = () => {
  return (
    <div className="about-section flex flex-col ">
      <div className="py-20 about-wrapper">
        {/* About Lexicon Mile */}
        <>
          <h2 className="about-title mt-4">About Lexicon Mile</h2>
          <p className="about-description mt-6 text-lg leading-relaxed text-gray-700">
            Founded in 2009 a s part of the Lexicon Group of Institutes (est.
            2006), Lexicon MILE represents the Group's commitment t o building
            leaders who thrive in a borderless world. With a presence across
            preschools, K-12 schools, hospitality, media, fitness, and
            specialized training academies, the Lexicon ecosystem i s a holistic
            platform for talent development.{" "}
          </p>
          <p className="about-description mt-6 text-lg leading-relaxed text-gray-700 mt-4">
            At Lexicon MILE, our philosophy-One Student at a Time-has evolved
            into the global positioning of, " A Mentor Every MILE." W e invest
            deeply in the personal journey of each learner, combining academic
            rigor, mentorship from industry leaders, and global exposure t o
            shape Day Zero Professionals-graduates who step into the workforce
            ready to lead from day one.
          </p>
        </>

        {/* University of South Wales */}
        <div className="about-south-wales">
          <h2 className="about-title mt-4">
            About the University of South Wales, UK
          </h2>
          <p className="about-description mt-6 text-lg leading-relaxed text-gray-700">
            The University of South Wales, UK, brings over 100 years of academic
            excellence to the partnership. Accredited by the Privy Council and
            assured b y the Quality Assurance Agency (QAA), USW has earned its
            place among the UK's most industry-focused universities.{" "}
          </p>
          <p className="about-description mt-6 text-lg leading-relaxed text-gray-700 mt-4">
            It's global alumni community spans more than 120 countries, and its
            credentials in professional education, innovation, and applied
            research make it a natural partner for Lexicon MILE. Together, we
            deliver a Global MBA that combines Indian dynamism with UK academic
            heritage.
          </p>
        </div>
      </div>
      <div className="about-image-container mt-12">
        <img src={aboutImg} alt="About Lexicon Mile"
        className = "about-image w-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
