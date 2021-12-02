import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"



function Footer(){
    return(

    <div className = "socialMedia">
    <a href = "https://instagram.com/zahir_a1?utm_medium=copy_link"> <FaInstagram/> Follow us at zahir_a1</a>
    <a href ="https://twitter.com/LatifJazim"><FaTwitter/> Stalk us on Twitter</a>
    <a href = "https://en-gb.facebook.com/"><FaFacebook/> For selling your data!</a>
    <a href ="https://www.linkedin.com/in/vinh-chu-7502b81b3/"><FaLinkedin/> Look out for big business updates</a>
    <a href ="https://github.com/zahir679/Front-end-Project"><FaGithub/> To have access to the project find us on GitHub</a>
    </div>
    )
}


export default Footer;