import React from "react"


function Project(props) {

	return(
        <div className="subsection grid2">
            <div className="left-column">
                <a href={props.img} target="_blank" rel="noopener noreferrer">
                    <img className="thumb" src={props.img} alt="Project Screenshot" />
                </a>
            </div>
            <div className="right-column">
                <h3><a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></h3>
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
        </div>
	)

}
export default Project