import React from 'react'
import { Link } from "react-router-dom";

// import { DefaultAccordion } from './Accordion'

function About() {
    return (
        <>
            <Link to="/">Click to view our about page</Link>
            <Link to="contact">Click to view our contact page</Link>
            {/* <DefaultAccordion /> */}
        </>
    )
}

export default About