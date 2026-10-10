import React, {Component} from "react"
import SkillsDb from "./SkillsDb"
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"
import ProjectsDb from "./ProjectsDb"
import RenderHTML from "./RenderHTML"
import RenderTXT from "./RenderTXT"
import ExperienceList from "./ExperienceList"

class Main extends Component {

    // Interval for refresh of data
    interval = null;

	constructor(props) {
        super()
		this.state = {
            lang: props.lang,
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
   
        
        

        const en = this.state.lang
        const pdfUrl = en
            ? "https://toogreen.ca/cv/Resume-DavidGagnon-English.pdf"
            : "https://toogreen.ca/cv/Resume-DavidGagnon-Francais.pdf"

        const socials = [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/toogreen/", icon: "linkedin" },
            { name: "Twitter", url: "https://twitter.com/2green", icon: "twitter" },
            { name: "Instagram", url: "https://www.instagram.com/tougrine/", icon: "instagram" },
            { name: "Behance", url: "https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1", icon: "behance" },
            { name: "GitHub", url: "https://github.com/toogreen", icon: "github" },
            { name: "YouTube", url: "https://www.youtube.com/user/toogreen/", icon: "youtube" }
        ]

        const navItems = [
            { id: "profile", label: en ? "Profile" : "Profil" },
            { id: "experience", label: en ? "Experience" : "Expérience" },
            { id: "education", label: en ? "Education" : "Éducation" },
            { id: "skills", label: en ? "Skills" : "Compétences" },
            { id: "portfolio", label: "Portfolio" },
            { id: "projects", label: en ? "Projects" : "Projets" }
        ]

        const logos = ["varsity", "iqi", "haiguish", "divercity"]

        const websites = [
            "websites/mtventures",
            "projects/softvoyage",
            "projects/avenirmd",
            "websites/futureid",
            "websites/vallee",
            "websites/wearth"
        ]

        return(

            <div>
                <nav className="topbar no-print">
                    <div className="container topbar-inner">
                        <a className="brand" href="#top">DG</a>
                        <ul className="nav-links">
                            {navItems.map(item => (
                                <li key={item.id}><a href={"#" + item.id}>{item.label}</a></li>
                            ))}
                        </ul>
                        <div className="lang">
                            <button onClick={this.toggleLang} aria-label={en ? "Passer en français" : "Switch to English"}>
                                {en ? "FR" : "EN"}
                            </button>
                        </div>
                    </div>
                </nav>

                <header id="top">
                    <div className="container">
                        <div className="hero">
                            <div className="hero-main">
                                <p className="eyebrow">Curriculum Vitae</p>
                                <h1 className="nom">David Gagnon</h1>
                                <p className="hero-role">
                                    {en
                                        ? "Webmaster · Front-End Developer · System Administrator"
                                        : "Webmestre · Développeur Front-End · Administrateur système"}
                                </p>

                                <div className="social no-print">
                                    {socials.map(s => (
                                        <a key={s.icon} className="social-icons" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                                            <img alt={s.name + " Social Media Icon"} src={"https://toogreen.ca/cv/img/hollow-cut-" + s.icon + ".svg"} />
                                        </a>
                                    ))}
                                </div>

                                <div className="hero-actions no-print">
                                    <a className="btn btn-primary" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                                        {en ? "Download PDF version" : "Télécharger la version PDF"}
                                    </a>
                                    <a className="btn btn-ghost" href="mailto:toogreen@gmail.com">
                                        {en ? "Get in touch" : "Me contacter"}
                                    </a>
                                </div>
                            </div>

                            <div className="hero-contact">
                                <p>
                                    <RenderHTML 
                                        data={this.state}
                                        itemName="link-to-linkedin"
                                    />
                                </p>
                                <p>
                                    550, {!en && "rue"} Jean D'Estrées, apt. 204<br />
                                    H3C 6W1, Montréal<br />
                                    <strong>{en ? "Mobile" : "Cellulaire"}:</strong> <a href="tel:438-985-5500" aria-label="Call (438) 985-5500">(438) 985-5500</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <main>

                    <div className="container">

                        <section className="section" id="profile">
                            <h2>{en ? "Profile" : "Profil"}</h2>
                            <p className="lead">
                                <RenderTXT
                                    data={this.state}
                                    itemName="profile"
                                />
                            </p>
                        </section>

                        <section className="section" id="experience">
                            <h2>{en ? "Experience" : "Expérience"}</h2>
                            <div className="timeline">
                                <ExperienceList
                                    data={this.state}
                                    language={curLang}
                                />
                            </div>
                        </section>

                        <section className="section" id="education">
                            <h2>{en ? "Education" : "Éducation"}</h2>
                            <div className="subsection">
                                <h3>
                                    {
                                        en
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
                        </section>
                    
                        <section className="section" id="skills">
                            <h2>{en ? "Skills & Qualifications" : "Atouts et compétences"}</h2>
                            <div className="skills-grid">
                                <SkillsList
                                    data={SkillsDb}
                                    language={curLang}
                                />
                            </div>
                        </section>

                        <section className="section" id="portfolio">
                            <h2>Portfolio</h2>

                            <h3>Logos</h3>
                            <div className="logo-grid">
                                {logos.map(logo => (
                                    <div className="logo-tile" key={logo}>
                                        <img alt="Logo from Portfolio" src={"https://toogreen.ca/cv/img/logos/" + logo + ".png"} />
                                    </div>
                                ))}
                            </div>

                            <h3>{en ? "Websites" : "Sites web"}</h3>
                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="websites"
                                />
                                {" "}
                                <a href="https://www.behance.net/gallery/4606221/Portfolio?iframe=1%3Fiframe%3D1" target="_blank" rel="noopener noreferrer">
                                    {en ? "View on Behance →" : "Voir sur Behance →"}
                                </a>
                            </p>

                            <div className="gallery">
                                {websites.map(site => {
                                    const src = "https://toogreen.ca/cv/img/" + site + ".png"
                                    return (
                                        <a key={site} href={src} target="_blank" rel="noopener noreferrer">
                                            <img alt="Website Link" src={src} loading="lazy" />
                                        </a>
                                    )
                                })}
                            </div>
                        </section>

                        <section className="section" id="projects">
                            <h2>{en ? "Projects" : "Projets"}</h2>
                            <p>
                                <RenderTXT
                                    data={this.state}
                                    itemName="projects"
                                />
                            </p>
                            <div className="projects-grid">
                                <ProjectsList
                                    db={ProjectsDb}
                                    language={curLang}
                                />
                            </div>
                        </section>

                    </div>
                
                    <div className="container">
                        <p className="conclusion">
                           <RenderTXT
                                data={this.state}
                                itemName="conclusion"
                           />
                        </p>
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