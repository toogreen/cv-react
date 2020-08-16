import React, {Component} from "react"
import SkillsDb from "./SkillsDb"
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"
import ProjectsDb from "./ProjectsDb"
import variablesDb from "./variablesDb"
import RenderHTML from "./RenderHTML"
import RenderTXT from "./RenderTXT"
import ExperienceList from "./ExperienceList"
import ExperienceDb from "./ExperienceDb"
//import Tabletop from 'tabletop';

class Main extends Component {

	constructor() {
		super()
		this.state = {
            lang: true
        }
        this.toggleLang = this.toggleLang.bind(this);
	}

	componentDidMount() {
/* 		this.setState({loading: true})
		fetch("http://toogreen.ca/json-test/SkillsDb.js")
			.then(response => response.json())
			.then(response => {
				const {SkillsDb} = response.data

                this.setState({ allSkills: SkillsDb })
                console.log(SkillsDb[0])
            }) */

/*         Tabletop.init({
            key: '2PACX-1vTpBf-g6irXcHsacKP8Z3Q1c3w9BlRY6OOyRagrVFyQ9talidbsFXHaWjNsdByFSGwRfJCRUlnsGpj7',
            callback: googleData => {
                this.setState({
                  data: googleData
                })
              },
              simpleSheet: true
        }) */
        
    }
    
    toggleLang() {
        this.setState(prevState => ({ lang: !prevState.lang }));
    }

    render(){

        let curLang 
		if (this.state.lang) {
			curLang = "en"
		} else {
			curLang = "fr"
		}

        return(

            <div>
                <header>
                    <h1>Curriculum Vitae</h1>
                    <p>
                        <RenderHTML
                            data={this.state}
                            itemName="link-to-pdf"
                        />
                    </p>

                    
                </header>
                <main>

                    <div className="lang">
                        <h1>You are currently logged in {curLang}</h1>
                        <button onClick={this.toggleLang}>{this.state.lang ? "Version française" : "English Version" }</button>
                    </div>


                    <div className="container">

                    {
                        //top part - Contact info
                    }	
                        <div className="grid3">
                            <div id="top-left">
                
                
                                {
                                    //Social Media Links here
                                }
                                <div className="social no-print">
                
                
                                    { 
                                    // LinkedIn 
                                    }
                                    <a className="social-icons"
                                    href="https://www.linkedin.com/in/toogreen/" target="_blank" rel="noopener noreferrer">
                                        <img alt="LinkedIn Social Media Icon" className="invert" src="https://toogreen.ca/cv/img/hollow-cut-linkedin.svg" />
                                    </a>
                
                                    { 
                                    // Twitter 
                                    }
                                    <a className="social-icons" href="https://twitter.com/2green" target="_blank" rel="noopener noreferrer">
                                        <img alt="Twitter Social Media Icon" className="invert" src="https://toogreen.ca/cv/img/hollow-cut-twitter.svg" />
                                    </a>
                
                                    { 
                                    // Instagram 
                                    }
                                    <a className="social-icons" href="https://www.instagram.com/tougrine/" target="_blank" rel="noopener noreferrer">
                                        <img alt="Instagram Social Media Icon" className="invert" src="https://toogreen.ca/cv/img/hollow-cut-instagram.svg" />
                                    </a>
                
                                    { 
                                    // Behance 
                                    }
                                    <a className="social-icons" href="https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1" target="_blank" rel="noopener noreferrer">
                                        <img alt="Behance Social Media Icon" className="invert" src="https://toogreen.ca/cv/img/hollow-cut-behance.svg" />
                                    </a>
                                    
                                    { 
                                    // GitHub 
                                    }
                                    <a className="social-icons" href="https://github.com/toogreen" target="_blank" rel="noopener noreferrer">
                                        <img alt="GitHub Social Media Icon" src="https://toogreen.ca/cv/img/hollow-cut-github.svg" />
                                    </a>
                
                                    { 
                                    // YoutTube 
                                    }
                                    <a className="social-icons" href="https://www.youtube.com/user/toogreen/" target="_blank" rel="noopener noreferrer">
                                        <img alt="YouTube Social Media Icon" src="https://toogreen.ca/cv/img/hollow-cut-youtube.svg" />
                                    </a>
                                </div>
                                
                                <p>
                                    <RenderHTML 
                                        data={this.state}
                                        itemName="link-to-linkedin"
                                    />
                                </p>

                            </div>
                            <div id="top-right">
                                <p><strong className="nom">David Gagnon</strong><br />
                                550, {!this.state.lang && "rue"} Jean D'Estrées, apt. 204<br />
                                H3C 6W1, Montréal<br />
                            {this.state.lang? "Mobile" : "Cellulaire"}: <a href="tel:438-985-5500"></a>(438) 985-5500</p>
                            </div>
                        </div>
                
                
                
                { 
                // Profile 
                }
                
                        <div className="section">
                
                            <h2>Profile</h2>

                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="profile"
                                />
                            </p>

                
                        </div>
                
                { 
                // Experience
                }
                
                
                        <div className="section" id="experience">
                
                            <h2>{this.state.lang ? "Experience" : "Expérience"}</h2>
                
                            <ExperienceList
                                data={ExperienceDb}
                            />
                        </div>
                
                
                        <div className="section">
                            <h2>Education </h2>
                            <h3>Rochebelle Professional Formation Center, Québec City — DEP, 1997-1999</h3>
                            <p>DEP in Graphic Design. Studied and practiced pre-print design work as well as web design, including internship experience for a web design company (SillyWeb)</p>
                        </div>
                    
                        <div className="section" id="skills">
                            <h2>Skills & Qualifications </h2>
                
                            <SkillsList
                                data={SkillsDb}
                            />
                
                        </div>
                
                
                        <div className="section" id="portfolio">
                            
                            <h2>Portfolio</h2>
                
                            <h3>Logos</h3>
                
                            <div className="subsection">
                                <img alt="Logo from Portfolio" src="https://toogreen.ca/cv/img/logos/varsity.png" />
                                <img alt="Logo from Portfolio" src="https://toogreen.ca/cv/img/logos/iqi.png" />
                                <img alt="Logo from Portfolio" src="https://toogreen.ca/cv/img/logos/haiguish.png" />
                                <img alt="Logo from Portfolio" src="https://toogreen.ca/cv/img/logos/divercity.png" />
                            </div>
                
                            <h3>Websites</h3>
                
                            <p>
                                Please visit this website to see some more samples:<br />
                                <a href="https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1" target="_blank" rel="noopener noreferrer">
                                https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1</a>
                            </p>
                
                            <div className="subsection">
                                <a href="https://toogreen.ca/cv/img/websites/mtventures.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/websites/mtventures.png" />
                                </a>
                                <a href="https://toogreen.ca/cv/img/projects/softvoyage.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/projects/softvoyage.png" />
                                </a>
                                <a href="https://toogreen.ca/cv/img/projects/avenirmd.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/projects/avenirmd.png" />
                                </a>
                                <a href="https://toogreen.ca/cv/img/websites/futureid.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/websites/futureid.png" />
                                </a>
                                <a href="https://toogreen.ca/cv/img/websites/vallee.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/websites/vallee.png" />
                                </a>
                                <a href="https://toogreen.ca/cv/img/websites/wearth.png" target="_blank" rel="noopener noreferrer">
                                    <img alt="Website Link" src="https://toogreen.ca/cv/img/websites/wearth.png" />
                                </a>
                            </div>
                        </div>
                
                        <div className="section" id="projects">
                
                            <h2>Projects</h2>
                            <p>A few projects I worked on, more in details...</p>
                
                            <ProjectsList
                                db={ProjectsDb}
                            />
                            
                        </div>
                
                
                    </div>
                
                    <div className="container">
                        <h3>That's about it for now! Hope you find this satisfactory to your needs. Don't hesitate to reach out! Thanks.</h3>
                    </div>
                </main>
            </div>
        )
    }
}

export default Main