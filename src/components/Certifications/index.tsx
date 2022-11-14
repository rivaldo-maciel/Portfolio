import { useContext } from 'react';
import menuContext from '../../context/menuContext';
import CertificationCard from '../CertificationCard';
import { Container } from './style';
import { certifications } from './data';
import { device } from '../../breakpoints';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Certifications = () => {
  const context = useContext(menuContext);
  return (
    <Container ref={context?.refs.certifications} device={device}>
      <h1 data-aos="fade-up">Certifications</h1>
      <Swiper
        data-aos="fade-up"
        className="mySwiper certifications-swiper"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {certifications.map(({ src, title, link }) => (
          <SwiperSlide>
            <CertificationCard key={src} src={src} title={title} link={link} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Certifications;
