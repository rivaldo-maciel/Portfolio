import { Container } from './style';
import profileImage from '../../assets/profile.jpg';
import { useContext } from 'react';
import menuContext from '../../context/menuContext';

const AboutMe = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.aboutMe}>
      <h1>About Me</h1>
      <div className="img-content">
        <img src={profileImage} alt="profile image" />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3CFF35"
            d="M53,-62.8C68.2,-50.5,79.6,-33.3,82.9,-14.6C86.1,4,81.2,24,70.2,38.1C59.2,52.2,42.1,60.4,26.3,61.5C10.5,62.6,-4,56.7,-16.9,50.3C-29.9,44,-41.2,37.2,-50.3,26.6C-59.4,15.9,-66.3,1.5,-63.8,-11.1C-61.4,-23.7,-49.7,-34.5,-37.6,-47.4C-25.4,-60.3,-12.7,-75.3,3.1,-79C18.9,-82.7,37.9,-75.2,53,-62.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
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
