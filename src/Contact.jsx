import React, { useState } from "react";
import Socialmedia from "./Socialmedia";
import "./contact.css";
const Contact = () => {
  //! step:1 Initializing the state
  let [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  })
  //! step:3 Declare the Function for the OnChange Event 

  let handleChange = (e) => {
    let { name, value } = e.target
    setData({...data, [name]: value})
    console.log(data);
  };

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formspree.io/f/xwppwnvv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          message: data.message
        })
      });
      if (response.ok) {
        setData({
          firstname: "",
          lastname: "",
          email: "",
          message: ""
        });
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  }; 

  return (
    <form className="form_container" >
      {/* //! Step:2 Declare the value and name attribute to the input field */}
    <div className="contact_container" id="contact">
      <table className="table_container">
        <tbody>
          <tr className="name_container">
            <td>
              <label>FIRST NAME:</label>
              <br />
              <input type="text" name="firstname" value={data.firstname} onChange={handleChange}/>
            </td>
            <td>
              <label>LAST NAME:</label>
              <br />
              <input type="text"  name="lastname" value={data.lastname} onChange={handleChange}/>
            </td>
          </tr>
          <tr className="email_container">
            <td>
              <label>EMAIL ID:</label>
              <br />
              <input type="email" name="email" value={data.email} onChange={handleChange}/>
            </td>
            <td>
              <label>MESSAGE:</label>
              <br />
              <textarea name="message" value={data.message} onChange={handleChange}></textarea>
            </td>
          </tr>
          <tr className="button_container">
            <td>
              <button className="submit_btn" onClick={handleSubmit}>SUBMIT</button>
            </td>
            <td>
              <Socialmedia />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </form>
  );
};

export default Contact;
