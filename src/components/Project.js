import React, {Component} from "react"


function Project(props) {

	return(
        <div className="subsection grid2">
            <div className="right-column">
                <h3><a href={props.url} target="_blank">{props.name}</a></h3>
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
            <div className="left-column">
                <a href={props.img} target="_blank">
                    <img src={props.img} />
                </a>
            </div>
        </div>
	)

}
export default Project