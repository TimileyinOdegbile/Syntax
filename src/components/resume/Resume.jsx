import React from "react";
import "./resume.css"

const Resume = ({ head, body }) => {
    return (
        <div className="syntax__resume">
            <h1>{head}</h1>
            <h5>{body}</h5>
        </div>
    )
}

export default Resume;