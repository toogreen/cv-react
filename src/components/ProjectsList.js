import React from 'react';
import Project from "./Project"
   
const ProjectsList = (props) => (
    props.db.map(item => (
        <Project
       		key={item.id} 
            name={item.name}
            url={item.url}
            img={item.img}
		    desc={item.desc}
        />
    ))  
);


export default ProjectsList