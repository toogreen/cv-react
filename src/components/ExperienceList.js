import React from 'react';
import Experience from "./Experience"
   
const ExperienceList = (props) => (
    props.db.map(item => (
        <Article 
       		key={item.id} 
		   	news={item.news}
		    title={item.title}
		    img={item.img}
		    desc={item.desc}
		    classtype={item.class}
			url={item.url}
			source={item.source}
        />
    ))  
);


export default ExperienceList