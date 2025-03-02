import React from 'react'
import mobile_left from "../assets/mob-left.png";
import mobile_right from "../assets/mob-right.png";
import arrow from "../assets/arrow.svg";
import coin_blue from "../assets/coin_blue.png"
import coin_blue_2 from "../assets/coin_blue_2.png"
import coin_gold from "../assets/coin_gold.png"

function Hero() {
  return (
    <div className="w-full h-screen grid grid-cols-2 relative border-b border-white/20">
        <div class="gradient hero-gradient"></div>
        <div className="relative hero-right w-full h-full ps-20 pt-20 text-white border-r border-white/20">
            <h1 className='intro-heading font-[500]'><span>We create </span><span className='text-[#e38436] font-[600]'>beautiful</span><br /> web and mobile <br /> applications <br /> for everyday use</h1>
            <div>
                <div class="circle-container">
                    <svg viewBox="0 0 200 200">
                        <defs>
                        <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"></path>
                        </defs>
                        <text class="circle-text">
                        <textPath href="#circlePath">READ OUR STORY READ OUR STORY READ OUR STORY READ OUR STORY READ OUR STORY</textPath>
                        </text>
                    </svg>
                    <div class="circle-image">
                        <img src={arrow} alt="Icon" className='w-16 h-16'/>
                    </div>
                </div>
                {/* <div>
                    <img src={donut} alt="donut" className="absolute w-30 h-30 right-35 bottom-30" />
                </div> */}
            </div>
        </div>
        <div className='hero-left relative z-1 ps-30 pt-5'>
            <div className='coin'>
                <img src={coin_blue} alt="coin" className="absolute right-70 top-0 w-30 h-30 z-100 pt-2" />
            </div>
            <div className='relative z-1'>
                <img src={mobile_left} alt="Mobile" className="w-90 h-130 ms-5" />
            </div>
            <div className='absolute right-15 top-10 z-0'>
                <img src={mobile_right} alt="Mobile" className="w-100 h-120 ms-5" />
            </div>
            <div className='coin'>
                <img src={coin_blue_2} alt="coin" className="absolute z-100 bottom-40 w-40 h-40"/>
            </div>
            <div className='coin'>
                <img src={coin_gold} alt="coin" className="absolute z-100 bottom-65 right-20 w-35 h-35"/>
            </div>
        </div>
        <div class="gradient"></div>
    </div>
  )
}

export default Hero