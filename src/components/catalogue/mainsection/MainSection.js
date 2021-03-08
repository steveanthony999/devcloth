import Card from './Card';
import './mainSection.scss';

import imageActiveWear from '../../../images/activewear.jpeg';
import imageTees from '../../../images/tees.jpeg';
import imageHoodies from '../../../images/hoodies.jpeg';
import imageAccessories from '../../../images/accessories.jpeg';

const MainSection = () => {
  return (
    <section id='main-section'>
      <Card title='Active Wear' image={imageActiveWear} />
      <Card title='Tees' image={imageTees} />
      <Card title='Hoodies' image={imageHoodies} />
      <Card title='Accessories' image={imageAccessories} />
    </section>
  );
};

export default MainSection;
