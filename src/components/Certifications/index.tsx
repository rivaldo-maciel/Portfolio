import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import CertificationCard from '../CertificationCard';
import { Container } from './style';
import { certifications } from './data';
import { device } from '../../breakpoints';

const Certifications = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.certifications} device={device}>
      <h1 data-aos="fade-up">Certifications</h1>
      <div data-aos="fade-up" className="certifications-container">
        {certifications.map(({ src, title, link }) => (
          <CertificationCard key={src} src={src} title={title} link={link} />
        ))}
      </div>
    </Container>
  );
};

export default Certifications;
