import React from "react";
import "./heading.css";

const Heading = ({ head, body }) => {
    return (
        <div className="syntax__heading">
            <h2 className="syntax__heading--head">{head}</h2>
            <p className="syntax__heading--line"></p>
            <p className="syntax__heading--body">{body}</p>
        </div>
    )
}

export default Heading;