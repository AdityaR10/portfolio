import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import me from '../../images/me.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import {motion} from 'framer-motion'
import { HackText } from "react-hacker-text-effect";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hello, I am <br />  
                        <motion.div
                        initial={{scale:0,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{duration:1}}>
                        <HackText word={Bio.name} textSize="48px"  colors={{textGlowColor:'white',textGlowShadowColor:'grey',textColor:'white',textShadowColor:'grey'}}
                        /> 
                        </motion.div>
                </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>
              
                    <HeroRightContainer id="Right">
                        <motion.div
                        initial={{scale:0,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{duration:1}}>
                            <Img style={{opacity:"0.85"}} src={me} alt="hero-image" />
                        </motion.div>
                    </HeroRightContainer>
               
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection