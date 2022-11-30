import { Outlet } from "react-router"
import Footer from "./Footer"
import Header from "./Header"

const Home = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Home