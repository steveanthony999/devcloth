import { connect } from 'react-redux';

import { addItem } from '../../../redux/cart/cartActions';

import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

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
      <button className='btn btn-light' onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
