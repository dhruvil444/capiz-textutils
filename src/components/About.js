import React from 'react'

// import { DefaultAccordion } from './Accordion'

function About(props) {



    return (
        <>
            <div className={`flex justify-center items-center my-auto h-screen ${props.mode && "dark"}`}>

                <h1 className="font-bold text-4xl dark:text-white">Will Update Soon!</h1>
            </div>

        </>
    )
}

export default About