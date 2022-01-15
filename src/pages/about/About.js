import React from 'react';
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from './AboutStyle';
import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Frontend Developer <span>Emre KESIM</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Emre KESIM</h2>
        <h3>I'am currently learning Frontend Development Languages</h3>
        <h4>I've already know JS, React JS, HTML, CSS, Bootstrap, SASS</h4>
        <h2>
          <a href="mailto:emrekesim34@gmail.com">Send email</a>{' '}
          : emrekesim34@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
