import home_profile1 from '../public/photos/home_profile1.png'
import light_bulb from "../public/photos/light_bulb.svg";

import "./home.css";
import Socialmedia from "./Socialmedia";
import { IoCloudDownloadOutline } from "react-icons/io5";
const Home = () => {
  return (
    <div className="home_Container" id="home">
      <section className="profile_Photo">
        <img src={home_profile1} alt="my photo" />
        <div className="high_light"></div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          harum debitis animi quod, quidem itaque unde ipsam molestiae
          voluptates fuga magnam numquam iusto quia eius nisi dolorum neque
          minus delectus autem et saepe. Aliquid in, consequatur consequuntur
          corporis quod dolores ut ullam neque, impedit harum quidem quia odit
          soluta mollitia!
        </p>
        <div className="button_icons">
          <button className="resume_btn">
            RESUME
            <IoCloudDownloadOutline />
          </button><Socialmedia />
        </div>
      </section>
    </div>
  );
};
export default Home;
