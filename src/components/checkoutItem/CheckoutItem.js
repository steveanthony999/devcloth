import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cartActions';

import './checkoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item util-my-2 util-pb-2 util-border-bottom'>
      <div className='details-container'>
        <img src={imageUrl} alt='item' />
        <span className='name'>{name}</span>
      </div>
      <span className='price'>${price}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          -
        </div>
        <div className='q-box'>{quantity}</div>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          +
        </div>
      </span>
      <span className='amount'>${(quantity * price).toFixed(2)}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
