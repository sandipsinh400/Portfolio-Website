import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"
import { AiFillMediumSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sandipsinh Zala</h4>
      <h4>Copyright &copy; 2025 SZ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sandipsinh400" target='_blank'><FaGithub/></a>
        <a href="https://in.linkedin.com/in/sandipsinh-zala-b92603304" target='_blank'><FaLinkedin/></a>
        <a href='zalasandipsinh3185@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://medium.com/@zalasandipsinh3185" target="_blank"><AiFillMediumSquare /></a>
      </div>
    </footer>
  )
}

export default Footer