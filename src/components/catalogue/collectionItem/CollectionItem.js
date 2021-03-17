import './collectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div
        style={{
          background: `url(${imageUrl}) no-repeat center center/cover`,
        }}
        className='collection-item-image'
      />
      <div className='collection-footer'>
        <span className='util-small-heading'>{name}</span>
        <span className='util-small-heading'>${price}</span>
      </div>
      <button className='btn btn-light'>Add to Cart</button>
    </div>
  );
};

export default CollectionItem;
