import React, { useEffect, useState } from "react";
import mobile_left from "../assets/mob-left.png";
import mobile_right from "../assets/mob-right.png";
import arrow from "../assets/arrow.svg";
import coin_blue from "../assets/coin_blue.png";
import coin_blue_2 from "../assets/coin_blue_2.png";
import coin_gold from "../assets/coin_gold.png";

function Hero() {
  const texts = ["Smart AI", "Web and Mobile", "UI/UX"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText(""); // Reset text
        setCharIndex(0);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
      }, 2000); // Pause before next text
    }
  }, [charIndex, textIndex]);

  return (
    <div className="w-full h-screen grid grid-cols-2 relative border-b border-white/20">
      <div className="gradient hero-gradient"></div>
      <div className="relative hero-right w-full h-full ps-20 pt-20 text-white border-r border-white/20">
        <h1 className="intro-heading font-[500]">
          <span>We create </span>
          <span className="text-[#e38436] font-[600]">beautiful</span>
          <br />
          <span className="typewriter-text">{displayText}</span>
          <br /> applications <br /> for everyday use
        </h1>
        <div>
          <div className="circle-container">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                ></path>
              </defs>
              <text className="circle-text">
                <textPath href="#circlePath">
                  READ OUR STORY READ OUR STORY READ OUR STORY READ OUR STORY
                </textPath>
              </text>
            </svg>
            <div className="circle-image">
              <img src={arrow} alt="Icon" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-left relative z-1 ps-30 pt-5">
        <div className="coin">
          <img
            src={coin_blue}
            alt="coin"
            className="absolute right-70 top-0 w-30 h-30 z-100 pt-2"
          />
        </div>
        <div className="relative z-1">
          <img src={mobile_left} alt="Mobile" className="w-90 h-130 ms-5" />
        </div>
        <div className="absolute right-15 top-10 z-0">
          <img src={mobile_right} alt="Mobile" className="w-100 h-120 ms-5" />
        </div>
        <div className="coin">
          <img
            src={coin_blue_2}
            alt="coin"
            className="absolute z-100 bottom-40 w-40 h-40"
          />
        </div>
        <div className="coin">
          <img
            src={coin_gold}
            alt="coin"
            className="absolute z-100 bottom-65 right-20 w-35 h-35"
          />
        </div>
      </div>
      <div className="gradient"></div>
    </div>
  );
}

export default Hero;
