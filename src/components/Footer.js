import React from "react"
import variablesDb from "./variablesDb"

function Footer(props){

    const newLang = (props.data.lang)? "en" : "fr"
	const footertext = variablesDb.find( ({ name }) => name === 'footer-text-'+newLang+'' );

    return(
        <div className="footer">
            <div className="container">

                <p  dangerouslySetInnerHTML={{ __html: footertext.value }}></p>
                <p>&copy; David Gagnon 2020 - This CV was built entirely on <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></p>	
            </div>
            
        </div>
    )
}

export default Footer