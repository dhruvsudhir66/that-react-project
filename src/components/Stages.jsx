import React from 'react'
import one from "../assets/one.svg"
import two from "../assets/two.svg"
import three from "../assets/three.svg"

function Stages() {
  return (
    <div className="stages parallax stages-bg">
        <div className="grid grid-cols-3">
            <div className="relative p-10 border-r border-white/20">
                <img src={one} alt="one" className="absolute top-0 right-0 pt-5 pe-5"/>
                <h2 className="text-6xl font-bold mb-15 pt-15">Stage</h2>
                <h3 className="text-2xl mb-5">Creating a Timeline</h3>
                <p className="stages-content pe-15">The process kicks off with an in-depth consultation with our client to gather essential project details. We carefully scrutinize the desired functionalities and break them down into the most granular components possible. These units are then organized chronologically based on their interdependencies, forming a structured sequence for implementation.Next, we delve into these mini functionalities, providing preliminary time estimates for each. This meticulous analysis culminates in the creation of a detailed timeline, documented in a Word document.</p>
            </div>
            <div className="relative p-10 border-r border-white/20">
                <img src={two} alt="one" className="absolute top-0 right-0 pt-5 pe-5"/>
                <h2 className="text-6xl font-bold mb-15 pt-15">Stage</h2>
                <h3 className="text-2xl mb-5">Database Construction and Prototype</h3>
                <p className="stages-content pe-15">We initiate the process by prioritizing the database, aligning it with the established timeline. Once the database is set, our designers gain a comprehensive understanding of the data landscape, equipping them to craft the initial prototype. Client involvement in the interactive prototype creation phase is crucial to ensure alignment with expectations and requirements.</p>
            </div>
            <div className="relative p-10 border-r border-white/20">
                <img src={three} alt="one" className="absolute top-0 right-0 pt-5 pe-5"/>
                <h2 className="text-6xl font-bold mb-15 pt-15">Stage</h2>
                <h3 className="text-2xl mb-5">Creating a Timeline</h3>
                <p className="stages-content pe-15">Following the completion of the preceding phases, our development team embarks on the application creation process. We adhere to the Scrum methodology, organized into two-week sprints, each comprising clearly defined tasks. Every task, once completed, undergoes meticulous testing, even after integration into the system.Through multiple iterations, we progress to the application testing phase, allowing the client to evaluate and provide feedback. Upon successful testing and refinement, the application is primed for release.</p>
            </div>
        </div>
    </div>
  )
}

export default Stages