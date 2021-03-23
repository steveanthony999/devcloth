import js_leggings_1 from '../../images/js_leggings_1.jpg';
import js_tee_1 from '../../images/js_tee_1.jpg';
import bios_hoodie_1 from '../../images/bios_hoodie_1.jpg';
import js_beanie_1 from '../../images/js_beanie_1.jpg';

const INITIAL_STATE = {
  sections: [
    {
      title: 'Active Wear',
      imageUrl: js_leggings_1,
      id: 1,
      linkUrl: 'shop/activewear',
    },
    {
      title: 'Tees',
      imageUrl: js_tee_1,
      id: 2,
      linkUrl: 'shop/tees',
    },
    {
      title: 'Hoodies & Sweatshirts',
      imageUrl: bios_hoodie_1,
      id: 3,
      linkUrl: 'shop/sweatshirts',
    },
    {
      title: 'Accessories',
      imageUrl: js_beanie_1,
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
