import React from 'react';
import Experience from "./Experience"
import ExperienceDb from "./ExperienceDb"
   

const ExperienceList = (props) => (

	ExperienceDb.filter(item => item.lang === props.language).map(item => (
        <Experience 
			key={item.id}
			title={item.title}
			leftTitle={item.leftTitle}
			leftList={item.leftList}
			rightTitle={item.rightTitle}
			rightList={item.rightList}
			lang={props.data.lang}
        />
    ))  
)


export default ExperienceList