import About from "./About"
import Home from "./Home"
import Navbar from "./Navbar"

import Contact from "./Contact"
const App= ()=>{
    return(
        <div>
            {/* <h1>this is App</h1> */}
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        </div>
    )
}
export default App