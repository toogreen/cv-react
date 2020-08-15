import React, {Component} from "react"
import SkillsDb from "./SkillsDb"
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"
import ProjectsDb from "./ProjectsDb"
import { render } from "@testing-library/react"
//import Tabletop from 'tabletop';

class Main extends Component {

	constructor() {
		super()
		this.state = {
            language: "English"
		}
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

    render(){
        return(
            <main>
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
                                href="https://www.linkedin.com/in/toogreen/" target="_blank">
                                    <img className="invert" src="https://toogreen.ca/cv/img/hollow-cut-linkedin.svg" />
                                </a>
            
                                { 
                                // Twitter 
                                }
                                <a className="social-icons" href="https://twitter.com/2green" target="_blank">
                                    <img className="invert" src="https://toogreen.ca/cv/img/hollow-cut-twitter.svg" />
                                </a>
            
                                { 
                                // Instagram 
                                }
                                <a className="social-icons" href="https://www.instagram.com/tougrine/" target="_blank">
                                    <img className="invert" src="https://toogreen.ca/cv/img/hollow-cut-instagram.svg" />
                                </a>
            
                                { 
                                // Behance 
                                }
                                <a className="social-icons" href="https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1" target="_blank">
                                    <img className="invert" src="https://toogreen.ca/cv/img/hollow-cut-behance.svg" />
                                </a>
                                
                                { 
                                // GitHub 
                                }
                                <a className="social-icons" href="https://github.com/toogreen" target="_blank">
                                    <img src="https://toogreen.ca/cv/img/hollow-cut-github.svg" />
                                </a>
            
                                { 
                                // YoutTube 
                                }
                                <a className="social-icons" href="https://www.youtube.com/user/toogreen/" target="_blank">
                                    <img src="https://toogreen.ca/cv/img/hollow-cut-youtube.svg" />
                                </a>
                            </div>
            
                            <p><strong>Linkedin Profile</strong> (contains a lot more details) :<br /> 
                            <a
                            href="https://www.linkedin.com/in/toogreen/">https://www.linkedin.com/in/toogreen/</a><br />
                            <strong>E-mail:&nbsp;</strong><a href="toogreen@gmail.com">toogreen@gmail.com</a></p>
            
                        </div>
                        <div id="top-right">
                            <p><strong>David Gagnon</strong><br />
                            550, Jean D'Estrées, apt. 204<br />
                            H3C 6W1, Montréal<br />
                            Home : <a href="tel:438-383-3600"></a>(438) 383-3600<br />
                            Mobile : <a href="tel:438-985-5500"></a>(438) 985-5500</p>
                        </div>
                    </div>
            
            
            
            { 
            // Profile 
            }
            
                    <div className="section">
            
                        <h2>Profile</h2>
                        <p>Honest and reliable, autodidact, hungry for learning and able to adapt to change. Passionate about IT technologies means always up-to-date with newest trends. Open Source technologies expert. Great knowledge of all IT technologies and systems, including Mac OS X, Windows PC, UNIX/Linux, Android & iOS. I am looking forward to working in a dynamic high-tech environment which will make best use of my management and IT skills. I am a long time Linux user, since 1997. </p>
            
            
                    </div>
            
            { 
            // Profile
            }
            
            
                    <div className="section" id="experience">
            
                        <h2>Experience</h2>
            
                        <h3>McCarthy Tétrault – September 2014 to June 2020</h3>
            
                        <div className="subsection grid">
            
                            <div className="left-column">
                                
                                <p>Webmaster, coordinator and CSS/jQuery/HTML5 Developer. My responsibilities included:</p>
            
                                <ul>
                                    <li>Maintaining the firm’s corporate and recruitment websites (production and design)</li>
                                    <li>Primary contact and project manager for internal website requests</li>
                                    <li>Primary contact with IT department for all web-related projects and liaising with vendors as required</li>
                                    <li>Support for design and layout of electronic external (clients) and internal communications</li>
                                    <li>Management of the firm-wide electronic event invitations process</li>
                                    <li>Providing website metrics</li>
                                    <li>Active participation in social media/online/technology related products</li>
                                </ul>	
                            </div>
            
            
                            <div className="right-column">
            
                                <h4>
                                    Some notable projects related to this position :
                                </h4>	
                                
                                <ul>
                                    <li>
                                        <strong>MT Version</strong> (<a href="https://www.mtversion.ca">www.mtversion.ca</a>) and MT Ventures (<a href="https://www.mtventures.ca">www.mtventures.ca</a>)<br />
                                        Based on a design produced by a collaboration of my input and the design team, I have built this website's content from scratch.
                                    </li>
                                    <li>
                                        <strong>CyberSecurity Guide</strong> (<a href="https://marcomm.mccarthy.ca/marcomm/cybersecurity/index.html">https://marcomm.mccarthy.ca/marcomm/cybersecurity/index.html</a>)<br />
                                        Small one pager website I developed using Bootstrap, based on an existing PDF document. I tried to retain the look and feel of the PDF to apply it to the web.
                                    </li>
                                    <li>
                                        <strong>Global Projects Map</strong> (<a href="https://marcomm.mccarthy.ca/marcomm/projects_map/">https://marcomm.mccarthy.ca/marcomm/projects_map/</a>)
                                        Very simple HTML5 website based on JSON with a Google Spreadsheet as its main data source
                                    </li>
                                </ul>	
            
                            </div>			
            
                        </div>
            
                        <h3>Softvoyage – November 2012 to March 2014</h3>
            
                        <div className="subsection grid">
            
                            <div className="left-column">
                                
                                <p>Web Designer and CSS/jQuery/HTML5 Developer. Worked on general graphic design as well as HTML5 development and UI design, with a special focus on mobile devices and responsive design. More recently started developing in-house web applications using PHP and MySQL/MariaDB. Most of the work was done on a Mac OS X client machine with code running on Linux servers (CentOS, RHLE).</p>
            
                            </div>
            
            
                            <div className="right-column">
            
                                <h4>
                                    Some notable projects related to this position :
                                </h4>	
                                
                                <ul>
                                    <li>
                                        <strong>Main Softvoyage Website</strong> (<a href="https://www.softvoyage.com">www.softvoyage.com</a>)<br />
                                        Based on a provided design, I have mostly built this Wordpress website's content and functionalities
                                    </li>
                                    <li>
                                        <strong>HTML5 Holidays Greetings card</strong> (<a href="https://holidays.softvoyage.com">holidays.softvoyage.com</a>)<br />
                                        Greetings card built entirely in HTML5/CSS3 and jQuery.
                                    </li>
                                    <li>
                                        <strong>AvenirMD</strong> (<a href="https://www.avenirmd.com">www.avenirmd.com</a>)<br />
                                        Side project I worked on, built the entire Wordpress website based on a template that I heavily modified using PHP and jQuery.
                                    </li>
                                </ul>	
            
                            </div>			
            
                        </div>
            
                        <h3>Shanghai United International School — 2004-2012</h3>
            
                        <div className="subsection grid">
            
                            <div className="left-column">
                                
                                <p>
                                    Cross-campus coordinator for a series of primary schools in Shanghai (Xiehe Education Group). I acted as an advisor, system administrator, facilitator and teacher. My tasks included managing the IT infrastructures across campuses and administrating the school’s web servers, databases, e-mail, FTP, Administration desk, etc. I have also deployed a Learning Management System (Moodle) and developed several web apps and databases for administrative functions (PHP+MySQL). On top of that, I was also providing technical support and training to teachers, as well as teaching ICT to primary and secondary school students. I followed the IB curriculum program as well as IPC and the English National Curriculum. You can consult some of my IB workshops attendance certificates by <a href="https://www.dropbox.com/sh/hh6ixhzowx8kle7/EMoi0MtSi-">following this link</a>. 
                                </p>
            
                            </div>
            
            
                            <div className="right-column">
            
                                <h4>
                                    Some notable projects related to this position :
                                </h4>	
                                
                                <ul>
                                    <li><strong>Main Xiehe Education Organisation website portal</strong> (<a href="https://www.suis.com.cn">www.suis.com.cn</a>)<br />
                                    I have set up, designed, and administered this website based on Drupal until June 2012. It's now unfortunately out of date and lacks the quality I would normally require, but it used to actually look good when I was still in charge of it! </li>
                                    <li><strong>Moodle installation at Shanghai United International School</strong><br />
                                    I have set up the Linux server (Debian), then set up and administered this Moodle website until June 2012. What it looks like now may not reflect my work anymore but I have originally built, set up, administered and maintained it in the past.</li>
                                    <li><strong>Students Database and Reporting System</strong> (<a href="https://drive.google.com/file/d/0B22ydAZ7kz_NbEZrMHE0UEhCNmM/view">See a screenshot here</a>)<br />
                                    I have helped create and maintain an online, PHP-based administrative database system for storing students information and monitoring other school management matters such as taking attendance, comments, transportation info, reports, etc. I have built the entire reports system from scratch using PHP, HTML and MySQL.</li>
                                    <li>Portable Netbooks Trolley (<a href="https://drive.google.com/file/d/0B22ydAZ7kz_NOTg5V3RSeTRJZW8/view">View document here</a>)<br />
                                    Designed a trolley system for Netbooks that is now in use in Shangyin Campus. Click on title above to see the actual plans.</li>
                                    <li><strong>Set up and maintenance of LAMP servers (Debian), Web services (Apache), Email (postfix+courier), file servers</strong><br />
                                    I have set up all the original Linux servers in the school, which ran websites and all the web apps, as well as the original main email system for all the schools based on Postfix and Courier.</li>
                                    <li><strong>Set up of Access-IT Library Software Platform</strong> (<a href="https://accessitlibrary.com">https://accessitlibrary.com</a><br />
                                    I've performed the installation and set up of the library systems "Access-IT" on the Linux servers as well as the database</li> systems required
                                </ul>	
            
                            </div>			
            
                        </div>
            
            
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
                            <img src="https://toogreen.ca/cv/img/logos/varsity.png" />
                            <img src="https://toogreen.ca/cv/img/logos/iqi.png" />
                            <img src="https://toogreen.ca/cv/img/logos/haiguish.png" />
                            <img src="https://toogreen.ca/cv/img/logos/divercity.png" />
                        </div>
            
                        <h3>Websites</h3>
            
                        <p>
                            Please visit this website to see some more samples:<br />
                            <a href="https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1" target="_blank">
                            https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1</a>
                        </p>
            
                        <div className="subsection">
                            <a href="https://toogreen.ca/cv/img/websites/mtventures.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/websites/mtventures.png" />
                            </a>
                            <a href="https://toogreen.ca/cv/img/projects/softvoyage.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/projects/softvoyage.png" />
                            </a>
                            <a href="https://toogreen.ca/cv/img/projects/avenirmd.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/projects/avenirmd.png" />
                            </a>
                            <a href="https://toogreen.ca/cv/img/websites/futureid.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/websites/futureid.png" />
                            </a>
                            <a href="https://toogreen.ca/cv/img/websites/vallee.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/websites/vallee.png" />
                            </a>
                            <a href="https://toogreen.ca/cv/img/websites/wearth.png" target="_blank">
                                <img src="https://toogreen.ca/cv/img/websites/wearth.png" />
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
        )
    }
}

export default Main