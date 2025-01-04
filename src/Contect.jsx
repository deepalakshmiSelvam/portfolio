import React from "react";
import Socialmedia from "./Socialmedia";
import "./contact.css";
const Contect = () => {
  return (
    <div className="contact_container" id="contact">
      <table className="table_container">
        <tbody>
          <tr className="name_container">
            <td>
              <label>FIRST NAME:</label>
              <br />
              <input type="text" />
            </td>
            <td>
              <label>LAST NAME:</label>
              <br />
              <input type="text" />
            </td>
          </tr>
          <tr className="email_container">
            <td>
              <label>EMAIL ID:</label>
              <br />
              <input type="email" />
            </td>
            <td>
              <label>MESSAGE:</label>
              <br />
              <textarea></textarea>
            </td>
          </tr>
          <tr className="button_container">
            <td>
              <button className="submit_btn">SUBMIT</button>
            </td>
            <td>
              <Socialmedia />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contect;
