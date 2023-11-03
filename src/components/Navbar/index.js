import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import logo from './logo.svg'
import {motion} from 'framer-motion'
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()

  const styles = {
    popup:{
      // display: open ? "flex" : "none",
      // opacity: open ? "1" : "0",
      display:"flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1rem",
      position: "sticky",
      padding: "0 24px",
      gap: "1rem", 
    }
  };

  return (
      <Nav>
        <NavbarContainer>
        <motion.div style={styles.popup}
    initial={{y:-250}}
    animate={{y:0}}
    transition={{delay:0.2,type:'spring',stiffness:120}}>
          <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}> 
            <img src={logo} style={{height:"50px", marginBottom:"16px"}}></img>
              <Span style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '10;', cursor: 'pointer' }}>Portfolio</Span>
            </a>
          </NavLogo>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href='#skills'>Skills</NavLink>
            <NavLink href='#experience'>Experience</NavLink>
            <NavLink href='#projects'>Projects</NavLink>
            <NavLink href='#education'>Education</NavLink>
          </NavItems>
          
          
          </motion.div>
          <motion.div
              initial={{x:100,y:-35}}
              animate={{x:0}}
              transition={{duration:1}}>
           <MobileIcon>
            <FaBars onClick={() => {
              setIsOpen(!isOpen)
            }} />
          </MobileIcon>
                </motion.div>
          {
            isOpen &&
              
                <MobileMenu isOpen={isOpen}>
                  <MobileLink href="#about" onClick={() => {
                    setIsOpen(!isOpen)
                  }}>About</MobileLink>
                  <MobileLink href='#skills' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Skills</MobileLink>
                  <MobileLink href='#experience' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Experience</MobileLink>
                  <MobileLink href='#projects' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Projects</MobileLink>
                  <MobileLink href='#education' onClick={() => {
                    setIsOpen(!isOpen)
                  }}>Education</MobileLink>
                  </MobileMenu>
          }
        </NavbarContainer>
        <motion.ButtonContainer
        initial={{x:400}}
        animate={{x:0}}
        transition={{delay:0.2,duration:1}}>
            <GitHubButton style={{marginRight:20}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </motion.ButtonContainer>
      </Nav>
  )
}

export default Navbar