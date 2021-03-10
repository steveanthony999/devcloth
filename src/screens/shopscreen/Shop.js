import CollectionPreview from '../../components/catalogue/collectionpreview/CollectionPreview';

import SHOP_DATA from './shopData';

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

export default Shop;
