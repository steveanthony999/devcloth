import bios_hoodie_1 from '../../images/bios_hoodie_1.jpg';
import bios_sweatshirt_1 from '../../images/bios_sweatshirt_1.jpg';
import bios_zipup_1 from '../../images/bios_zipup_1.jpg';
import javascript_cap_1 from '../../images/javascript_cap_1.jpg';
import javascript_joggers_1 from '../../images/javascript_joggers_1.jpg';
import js_backpack_1 from '../../images/js_backpack_1.jpg';
import js_beanie_1 from '../../images/js_beanie_1.jpg';
import js_crop_tee_1 from '../../images/js_crop_tee_1.jpg';
import js_leggings_1 from '../../images/js_leggings_1.jpg';
import js_shorts_1 from '../../images/js_shorts_1.jpg';
import js_tee_1 from '../../images/js_tee_1.jpg';
import js_toddler_tee_1 from '../../images/js_toddler_tee_1.jpg';

const SHOP_DATA = [
  {
    id: 1,
    title: 'Active Wear',
    routeName: 'activewear',
    items: [
      {
        id: 1,
        name: "Men's Athletic Long Shorts",
        imageUrl: js_shorts_1,
        price: 26.95,
      },
      {
        id: 2,
        name: "Women's Yoga Leggings",
        imageUrl: js_leggings_1,
        price: 29.95,
      },
      {
        id: 3,
        name: 'Unisex Joggers',
        imageUrl: javascript_joggers_1,
        price: 22.95,
      },
    ],
  },
  {
    id: 2,
    title: 'Tees',
    routeName: 'tees',
    items: [
      {
        id: 4,
        name: 'Ringer Tee',
        imageUrl: js_tee_1,
        price: 15.95,
      },
      {
        id: 5,
        name: "Women's Crop Tee",
        imageUrl: js_crop_tee_1,
        price: 21.95,
      },
      {
        id: 6,
        name: 'Toddler Short Sleeve Tee',
        imageUrl: js_toddler_tee_1,
        price: 12.95,
      },
    ],
  },
  {
    id: 3,
    title: 'Hoodies & Sweatshirts',
    routeName: 'hoodies',
    items: [
      {
        id: 7,
        name: 'Bios Hoodie',
        imageUrl: bios_hoodie_1,
        price: 39.95,
      },
      {
        id: 8,
        name: 'Bios Unisex Sweatshirt',
        imageUrl: bios_sweatshirt_1,
        price: 35.95,
      },
      {
        id: 9,
        name: 'Hoodie Sweater',
        imageUrl: bios_zipup_1,
        price: 34.95,
      },
    ],
  },
  {
    id: 4,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 10,
        name: 'Beanie',
        imageUrl: js_beanie_1,
        price: 17.95,
      },
      {
        id: 11,
        name: 'Hat',
        imageUrl: javascript_cap_1,
        price: 13.95,
      },
      {
        id: 12,
        name: 'Backpack',
        imageUrl: js_backpack_1,
        price: 34.95,
      },
    ],
  },
  //   {
  //     id: 5,
  //     title: 'Collections',
  //     routeName: 'collections',
  //     items: [
  //       {
  //         id: 13,
  //         name: 'JS Streetwear Collection',
  //         imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //         price: '',
  //       },
  //       {
  //         id: 14,
  //         name: 'DevActive Collection',
  //         imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //         price: '',
  //       },
  //       {
  //         id: 15,
  //         name: 'X Collection',
  //         imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //         price: '',
  //       },
  //     ],
  //   },
];

export default SHOP_DATA;