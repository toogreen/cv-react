import React from 'react';
import Experience from "./Experience"
   
const ExperienceList = (props) => (
    props.data.map(item => (
        <Experience 
			key={item.id}
			title={item.title}
			leftTitle={item.leftTitle}
			leftList={item.leftList}
			rightTitle={item.leftTitle}
			rightList={item.rightList}
        />
    ))  
);


export default ExperienceList