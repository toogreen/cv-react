import React from 'react';
import Skill from "./Skill"
   
const SkillsList = (props) => (
    props.data.map(item => (
        <Skill 
       		key={item.id} 
		   	name={item.name}
		    desc={item.desc}
        />
    ))  
);


export default SkillsList