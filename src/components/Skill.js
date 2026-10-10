import React from "react"


function Skill(props) {

	return(
        <article className="subsection skill-card">
            <h3>{props.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
        </article>
	)

}
export default Skill
