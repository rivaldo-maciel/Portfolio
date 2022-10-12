import { Container } from './style';
import { BsFillEyeFill } from 'react-icons/bs';

type props = {
  src: string,
  title: string,
  link: string
}

const CertificationCard = ({ src, title, link }: props) => {
  return (
    <Container>
      <h3>{title}</h3>
      <img src={src} alt="certification image" />
      <a href={link} target="blank"><BsFillEyeFill size={30} /></a>
    </Container>
  )
}

export default CertificationCard;