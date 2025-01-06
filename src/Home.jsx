import home_profile1 from "../public/photos/home_profile1.jpg";
import light_bulb from "../public/photos/light_bulb.svg";
import "./home.css";
import Socialmedia from "./Socialmedia";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="home_Container" id="home">
      <section className="profile_Photo">
        <img src={home_profile1} alt="my photo" />
      </section>
      <section className="bulb">
        <img src={light_bulb} alt="bulb" />
      </section>
      <section className="my_Details">
        <h1>
          I AM
          <span className="name"> DEEPALAKSHMI SELVAM</span>
        </h1>
        <p>
          Frontend Developer passionate about crafting responsive, user-friendly
          web applications with modern technologies like React.js, JavaScript,
          HTML5, and CSS3. Skilled in translating designs into high-quality
          code, integrating RESTful APIs, and collaborating in agile teams.
          Proficient in Git and driven to grow in dynamic, innovative
          environments
        </p>
        <div className="button_icons">
          <button className="resume_btn">
            <a href="../public/assets/deepalakshmi.pdf" download>
              RESUME
              <IoCloudDownloadOutline />
            </a>
          </button>
          <Socialmedia />
        </div>
      </section>
    </div>
  );
};
export default Home;
