import React from "react"

function Project(props) {
	return (
        <article className="subsection project-card">
            <div className="left-column project-image">
                <a href={props.img} target="_blank" rel="noopener noreferrer">
                    <img className="thumb" src={props.img} alt={props.name + " screenshot"} />
                </a>
            </div>
            <div className="right-column project-copy">
                <h3>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
        </article>
	)
}

export default Project