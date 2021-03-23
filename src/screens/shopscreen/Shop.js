// import CollectionPreview from '../../components/catalogue/collectionpreview/CollectionPreview';

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';

import './shop.scss';

// import SHOP_DATA from './shopData';

const Shop = () => {
  return (
    <section id='shop'>
      {/* <div className='shop-container'>
        {SHOP_DATA.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
      </div> */}
      <CollectionsOverview />
    </section>
  );
};

export default Shop;
