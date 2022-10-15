import { Container } from './style';
import profileImage from '../../assets/profile.jpg';
import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import { device } from '../../breakpoints';

const AboutMe = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.aboutMe} device={device}>
      <h1>About Me</h1>
      <div className="img-content">
        <img src={profileImage} alt="profile image" />
      </div>
      <p>
        My name is Rivaldo. I'm 24 years old. I'm Full Stack Web Developer. I
        currently live in the city of Cruzília-MG. I am fascinated by everything
        that involves technology. Since I got my first computer in 2009, to this
        day it has become my favorite hobby, whether for gaming, image editing
        or developing personal/study projects. In addition to coding, I like to
        listen to music, watch films and series and I
        don't dispense a good conversation with my friends!
      </p>
    </Container>
  );
};

export default AboutMe;
