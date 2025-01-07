import "./Navbar.css";
const Navbar=()=>{
    return(
        <div className="navabar_container">
            <h4>WELCOME!</h4>
        <section>
            <li><a href="#home">START HERE</a></li>
            <li><a href="#about">KNOW ME</a></li>
            {/* <li><a href="#">PROJECTS</a></li> */}
            <li><a href="#contact">GET IN TOUCH</a></li>
        </section>
        </div>
    )
}
export default Navbar;