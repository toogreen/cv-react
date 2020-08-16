import React from "react"


function Skill(props) {

	return(
        <div className="subsection grid3">
            <div className="left-column">
                <h3>{props.name}</h3>
            </div>
            <div className="right-column">
                <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
            </div>
        </div>	
	)

}
export default Skill