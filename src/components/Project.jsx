import React from 'react'
import moon from "../assets/moon.png";
import nft from "../assets/nft.png";
import symbol from "../assets/symbol.jpeg";
import nft_2 from "../assets/nft_2.png";
import arrow_link from "../assets/arrow-link.svg";

function Project() {
  return (
    <div className=''>
        <div className="grid grid-cols-2">
            <div className="ps-30 pt-20 border-r border-b border-white/20">
                <h2 className="projects-title">
                    <p className="text-6xl text-white">We are <br />working <span className="text-6xl text-white font-bold">on</span></p>
                    <p className="text-6xl text-white font-bold">different <br /> projects</p>
                </h2>
                <div className="flex flex-wrap gap-20 mt-20 w-100 ps-20 pb-20">
                    <div>
                        <img src={moon} alt="moon" className="w-20"/>
                    </div>
                    <div>
                        <img src={nft} alt="moon" className="w-20"/>
                    </div>
                    <div>
                        <img src={symbol} alt="moon" className="w-20"/>
                    </div>
                    <div>
                        <img src={nft_2} alt="moon" className="w-20"/>
                    </div>
                </div>
            </div>
            <div className="relative border-b border-white/20 pb-20">
            <div class="orange-gradient"></div>
                <div className='ps-30 pt-20'>
                    <h2 className="text-5xl text-white ">
                       <p>Our process <span className="font-bold">step</span></p>
                       <p className="font-bold">by step</p>
                    </h2>
                    <p className="project-content pe-70 text-white pt-4">
                    It all commences with a comprehensive consultation with our clients. The initiation of any mobile app development project hinges on its practicality and necessity. From crafting an eye-catching logo to shaping the overall layout, every element that the end-users encounter must exude an exceptional user experience. And it all begins with meticulously optimized developer code.A well-thought-out strategy serves as the roadmap that transforms concepts into tangible reality, making it a vital component of the entire mobile app development process. While every app is unique, our methodologies are in a constant state of evolution. Nonetheless, there is a fairly standardized process that we adhere to when developing mobile apps.The mobile app development process typically encompasses several phases, including idea conceptualization, strategic planning, design, development, deployment, and post-launch activities. At DedalDev, we have crafted our own approach, breaking this journey into three distinct stages.
                    </p>
                    <p className="relative our-mission-btn text-white pt-5">OUR MISSION<span className="our-mission-arrow"><img src={arrow_link} alt="" /></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project