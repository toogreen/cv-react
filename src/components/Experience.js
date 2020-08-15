import React, {Component} from "react"


function Article(props) {

	return(
		<article>
				<a id={props.key} href={props.url} target="_blank">
					<div id={props.key} className={props.classtype}>
						<img id={props.key} src={props.img} />
		 				<h1>{props.title}</h1>
						<br />
						<p id={props.key}>{props.desc}</p>			
					</div>
				</a>
		</article>

	)

}
export default Article