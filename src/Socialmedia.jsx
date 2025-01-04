import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import "./socialmedia.css"
const Socialmedia = () => {
  return (
    <div className='socialmedia_container'>
        <button className='icon git_btn'><FaGithub /></button>
        <button className='icon mail_btn'><CgMail /></button>
        <button className='icon in_btn'><FaLinkedinIn /></button>
    </div>
    
  )
}

export default Socialmedia