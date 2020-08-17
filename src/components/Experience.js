import React from "react"


function Experience(props) {

	return(
		<div className="experienceItem">

			<h3>
			<span className="expTitle">{props.title}&nbsp;&nbsp;</span>
			<span className="expSubTitle">{props.subtitle}</span>
			</h3>

			<div className="subsection grid">

				<div className="left-column">
					
					<p dangerouslySetInnerHTML={{ __html: props.leftTitle }}>
					</p>

					<ul dangerouslySetInnerHTML={{ __html: props.leftList }}>
					</ul>	
				</div>


				<div className="right-column">

					<h4>
						{props.rightTitle}
					</h4>	
					
					<ul dangerouslySetInnerHTML={{ __html: props.rightList }}>
					</ul>	

				</div>			

			</div>
		</div>

	)
	
}
export default Experience