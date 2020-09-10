import React from "react"
import Main from "./components/Main"
import "./App.css"
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter, Route } from 'react-router-dom';
import getUserLocale from 'get-user-locale'

function App() {


  return (
  	<HashRouter>
	    <div>
	    		<Route path="/fr">
	    			<Main 
	    				lang={false}
	    			/>
	    		</Route>
	    		<Route path="/en">
	    			<Main 
	    				lang={true}
	    			/>
	    		</Route>
	    		<Route path="/">
	    			<Main
	    				lang={getUserLocale().includes("en")} // Checks the browser's locale, if it contains "en", it will set to true (English)
	    			/>
	    		</Route>
	    </div>
    </HashRouter>
  )
}

export default App
