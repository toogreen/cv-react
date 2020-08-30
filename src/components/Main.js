import React, {Component} from "react"
import SkillsDb from "./SkillsDb"
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"
import ProjectsDb from "./ProjectsDb"
import RenderHTML from "./RenderHTML"
import RenderTXT from "./RenderTXT"
import ExperienceList from "./ExperienceList"
//import Tabletop from 'tabletop';

class Main extends Component {

    // Interval for refresh of data
    interval = null;

	constructor() {
        super()
		this.state = {
            lang: true,
            ProjectsDb: [],
            curLang: "2"
        }

        this.toggleLang = this.toggleLang.bind(this);
	}

/*    componentDidMount() {
        // Every 60 seconds this fetch a new version of the data
        this.interval = setInterval(this.getData, 60000);

        // Fetch data from getData function lower down
        this.getData();
    }   

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    getData = () => {

        fetch("http://localhost:3001/ProjectsDb")
        //fetch("https://my-json-server.typicode.com/toogreen/myjsondata/db")
            .then(response => response.json())
            .then(response => {
                
                const data = response
                //const data = response.ProjectsDb
                
                this.setState({ ProjectsDb: data })
                
            })

    }*/

    
    toggleLang() {
        this.setState(prevState => ({ lang: !prevState.lang }));
    }

    render(){

        const queryString = window.location.search;
        console.log(queryString);


        const params = new URLSearchParams(window.location.search)
        for (const param of params) {
          console.log(param)
        }


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
                    {
                        // Link to PDF version
                    }
                        <RenderHTML
                            data={this.state}
                            itemName="link-to-pdf"
                        />
                    </p>

                    
                </header>

                <main>

                    <div className="container">

                    <div className="lang">
                        <button onClick={this.toggleLang}>{this.state.lang ? "FR" : "EN" }</button>
                    </div>


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
                                    // YouTube 
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
                
                            <h2>{this.state.lang? "Profile" : "Profil"}</h2>

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
                                data={this.state}
                                language={curLang}
                            />
                        </div>
                
                
                        <div className="section">
                            <h2>{this.state.lang? "Education" : "Éducation"} </h2>
                            <h3>
                                {
                                    this.state.lang
                                    ? 
                                    "Rochebelle Professional Formation Center, Québec City — DEP" 
                                    :
                                    "Centre de formation professionnelle de Rochebelle, Québec - DEP"
                                }
                                </h3>
                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="edu"
                                />
                            </p>
                        </div>
                    
                        <div className="section" id="skills">
                            <h2>{this.state.lang? "Skills & Qualifications" : "Atouts et compétences"} </h2>
                
                            <SkillsList
                                data={SkillsDb}
                                language={curLang}
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
                
                            <h3>{this.state.lang? "Websites" : "Sites web"}</h3>
                
                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="websites"
                                />
                                <br />
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
                
                            <h2>{this.state.lang? "Projects" : "Projets"}</h2>
                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="projects"
                                />                               
                            </p>
                
                            <ProjectsList
                                db={ProjectsDb}
                                language={curLang}
                            />
                            
                        </div>
                
                
                    </div>
                
                    <div className="container">
                        <h3>
                           <RenderTXT
                                data={this.state}
                                itemName="conclusion"
                           />
                        </h3>
                    </div>
                </main>
                <footer>
                    <div className="container">

                        <p>
                            <RenderHTML 
                                data={this.state}
                                itemName="footer-text"
                            />

                        </p>
                     </div>

                </footer>
            </div>
        )
    }
}

export default Main