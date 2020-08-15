import React from "react"
import variablesDb from "./variablesDb"

function Header(props){

	const newLang = (props.data.lang)? "en" : "fr"
	const linktopdf = variablesDb.find( ({ name }) => name === 'link-to-pdf-'+newLang+'' );

    return(
    <header>
		<h1>Curriculum Vitae</h1>
		<p dangerouslySetInnerHTML={{ __html: linktopdf.value }}></p>
		
	</header>
    )
}

export default Header