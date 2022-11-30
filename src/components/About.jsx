import profilepic from '../assets/profilepic.jpg'

const About = ()=>{
    return(
        <div>
            <section className="intro">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img className="profilepic" src={profilepic} alt="profile-picture" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className="greeting">Hello!</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <h3 className="bio">I'm Nate Wolf. </h3>
                            <h3>I'm a mechanical engineer, a coder, and an amateur plant dad.</h3>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="content">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-sm-8 mb-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h2 className="skill-heading">Engineering</h2>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Computer Aided Design</p>
                                        <p>3D Printing</p>
                                        <p>Finite Element Analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-8 mb-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h2 className="skill-heading">Coding</h2>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Python</p>
                                        <p>HTML/CSS/JavaScript</p>
                                        <p>Ruby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-8 mb-3">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <h2 className="skill-heading">Data Science</h2>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Databases</p>
                                        <p>Data Visualization</p>
                                        <p>Data Analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About