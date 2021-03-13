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
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'Tees',
    routeName: 'tees',
    items: [
      {
        id: 1,
        name: 'Ringer Tee',
        imageUrl: js_tee_1,
        price: 15.95,
      },
      {
        id: 2,
        name: "Women's Crop Tee",
        imageUrl: js_crop_tee_1,
        price: 21.95,
      },
      {
        id: 3,
        name: 'Toddler Short Sleeve Tee',
        imageUrl: js_toddler_tee_1,
        price: 12.95,
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Hoodies & Sweatshirts',
    routeName: 'sweatshirts',
    items: [
      {
        id: 1,
        name: 'Bios Hoodie',
        imageUrl: bios_hoodie_1,
        price: 39.95,
      },
      {
        id: 2,
        name: 'Bios Unisex Sweatshirt',
        imageUrl: bios_sweatshirt_1,
        price: 35.95,
      },
      {
        id: 3,
        name: 'Hoodie Sweater',
        imageUrl: bios_zipup_1,
        price: 34.95,
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 1,
        name: 'Beanie',
        imageUrl: js_beanie_1,
        price: 17.95,
      },
      {
        id: 2,
        name: 'Hat',
        imageUrl: javascript_cap_1,
        price: 13.95,
      },
      {
        id: 3,
        name: 'Backpack',
        imageUrl: js_backpack_1,
        price: 34.95,
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Collections',
    routeName: 'collections',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
