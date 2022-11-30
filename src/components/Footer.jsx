const Footer = ()=>{
    return (
        <footer>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/nathanielpwolf/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-linkedin fa-stack-1x"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/nate.wolf.129/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/daragmas">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-github fa-stack-1x"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p className="copyright text-center">Copyright &copy; Nate Wolf 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer