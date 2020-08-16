import React from "react"
import variablesDb from "./variablesDb"

function RenderHTML(props){

    const lang = (props.data.lang)? "en" : "fr"
    const itemName = props.itemName
    const content = (variablesDb.find( ({ name }) => name === itemName+'-'+lang )).value;

    return(
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
    )
}


export default RenderHTML