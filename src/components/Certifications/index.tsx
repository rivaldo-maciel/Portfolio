import CertificationCard from '../CertificationCard';
import { Container } from './style';
import { certifications } from './style';

const Certifications = () => {
  return (
    <Container>
      <h1>Certifications</h1>
      <div className="certifications-container">
        {certifications.map(
          ({ src, title, link }) => (
            <CertificationCard
              key={src}
              src={src}
              title={title}
              link={link}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default Certifications;
