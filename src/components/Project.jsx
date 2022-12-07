const Project = (info) =>{
    console.log(info)
    console.log(info.languages)
    return(
        <div className="project">
            <h3 className="project-title">Title{info.name}</h3>
            <h4>Languages</h4>
            <ul className="project-languages">
                {/* {info["languages"].map((language)=><li><p>{language}</p></li>)} */}
            </ul>
            <h4>Description</h4>
            <h4>Links</h4>
            <hr/>
        </div>
    )
}

export default Project

// Unused at the moment