import { Container } from './style';
import profileImage from '../../assets/profile.jpg';

const AboutMe = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <img src={ profileImage} alt='profile image' />
      <p>
        My name is Rivaldo. I'm 24 years old. I currently live in the city of
        Cruzília-MG. I'm Full Stack Web Developer. I am fascinated by everything
        that involves technology. Since I got my first computer in 2009, to this
        day it has become my favorite hobby, whether for gaming, image editing
        or developing personal/study projects. In addition to coding, I like to
        listen to music musical_note, watch films and series movie_camera and I
        don't dispense a good conversation with my friends speaking_head!
      </p>
    </Container>
  );
};

export default AboutMe;
