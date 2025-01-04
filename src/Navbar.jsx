import "./Navbar.css";
const Navbar=()=>{
    return(
        <div className="navabar_container">
            <h4>WELCOME!</h4>
        <section>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#contact">CONTACT ME</a></li>
        </section>
        </div>
    )
}
export default Navbar;