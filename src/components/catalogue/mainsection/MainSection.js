import { useState } from 'react';

import Card from './Card';
import './mainSection.scss';

import imageActiveWear from '../../../images/activewear.jpeg';
import imageTees from '../../../images/tees.jpeg';
import imageHoodies from '../../../images/hoodies.jpeg';
import imageAccessories from '../../../images/accessories.jpeg';

const MainSection = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'Active Wear',
      imageUrl: imageActiveWear,
      linkUrl: 'activewear',
    },
    {
      id: 2,
      title: 'Tees',
      imageUrl: imageTees,
      linkUrl: 'tees',
    },
    {
      id: 3,
      title: 'Hoodies',
      imageUrl: imageHoodies,
      linkUrl: 'hoddies',
    },
    {
      id: 4,
      title: 'Accessories',
      imageUrl: imageAccessories,
      linkUrl: 'accessories',
    },
  ]);

  return (
    <section id='main-section'>
      {sections.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </section>
  );
};

export default MainSection;
