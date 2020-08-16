import variablesDb from "./variablesDb"

function RenderTXT(props){

    const lang = (props.data.lang)? "en" : "fr"
    const itemName = props.itemName
    const content = (variablesDb.find( ({ name }) => name === itemName+'-'+lang )).value;

    return(
        content
    )
}


export default RenderTXT