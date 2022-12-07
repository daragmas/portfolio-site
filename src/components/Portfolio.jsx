import Project from './Project'

const Portfolio = () => {
    const projects = [
        {
            name: "Liber Characterum",
            languages: ["Python"],
            description: "Desktop character creation application for the Black Crusade tabletop role-playing system",
            links: [
                {
                    site: "Github",
                    href: "https://github.com/daragmas/Liber-Characterum"
                },
                {
                    site: "Demo",
                    href: "https://youtu.be/NhbB-0l7AUg"
                }
            ]
        },
        {
            name: "Transparenz",
            languages: ["Ruby on Rails", "Ruby", "HTML/CSS/Javascript", "React", "PostgreSQL"],
            description: "A hospital procedure price comparison tool",
            links: [
                {
                    site: "Github",
                    href: "https://github.com/daragmas/TNZNZ-Health"
                }
            ]
        },
        {
            name: "Kon-Di",
            languages: ["Ruby on Rails", "Ruby", "HTML/CSS/Javascript", "React", "SQLite"],
            description: "A secure diary application, where user diary entries are encrypted in the datbase",
            links: [
                {
                    site: "Github",
                    href: "https://github.com/daragmas/kon_di",
                }
            ]
        },
    ]

    return (
        <>
            <div className='container-fluid portfolio'>
                {
                    projects.map((project, index) => {
                        return (
                            <div className="project justify-content-md-center col-12" key={index}>
                                <h2 className="project-title">{project.name}</h2>
                                <h4>Languages</h4>
                                <ul className="project-languages">
                                    {project.languages.map((language, i) => <li key={i}><p>{language}</p></li>)}
                                </ul>
                                <p>{project.description}</p>
                                <h4>Links</h4>
                                <ul>
                                    {project.links.map((link) => <li key={link.site}><a href={link.href}>{link.site}</a></li>)}
                                </ul>
                                <hr />
                            </div>

                        )
                    })
                }

            </div>
        </>
    )
}

export default Portfolio