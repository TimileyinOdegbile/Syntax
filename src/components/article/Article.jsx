import React from "react";
import './article.css'

const Article = ({ head, topic, text }) => {
    return (
        <div>
            <h6 className="syntax__aboutUs--head">{head}</h6>
            <h3 className="syntax__aboutUs--topic">{topic}</h3>
            <p className="syntax__aboutUs--text">{text}</p>
        </div>
    )
};

export default Article;