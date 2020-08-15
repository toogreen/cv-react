import React, {Component} from "react"


function Skill(props) {

	return(
        <div className="subsection grid">
            <div className="left-column">
                <h3>{props.name}</h3>
            </div>
            <div className="right-column">
                <p>
                    {props.desc}
                </p>
            </div>
        </div>	
	)

}
export default Skill