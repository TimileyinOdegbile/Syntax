import React from "react";
import './article.css'

const Article = ({ head, topic, text }) => {
    return (
        <div className="syntax__article">
            <h6 className="syntax__article--head">{head}</h6>
            <h3 className="syntax__article--topic">{topic}</h3>
            <p className="syntax__article--text">{text}</p>
        </div>
    )
};

export default Article;