import imageActiveWear from '../../images/activewear.jpeg';
import imageTees from '../../images/tees.jpeg';
import imageHoodies from '../../images/hoodies.jpeg';
import imageAccessories from '../../images/accessories.jpeg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Active Wear',
      imageUrl: imageActiveWear,
      id: 1,
      linkUrl: 'shop/activewear',
    },
    {
      title: 'Tees',
      imageUrl: imageTees,
      id: 2,
      linkUrl: 'shop/tees',
    },
    {
      title: 'Hoodies',
      imageUrl: imageHoodies,
      id: 3,
      linkUrl: 'shop/sweatshirts',
    },
    {
      title: 'Accessories',
      imageUrl: imageAccessories,
      size: 'large',
      id: 4,
      linkUrl: 'shop/accessories',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
