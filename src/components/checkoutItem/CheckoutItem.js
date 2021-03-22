import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cartActions';

import './checkoutItem.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item util-my-2 util-pb-2 util-border-bottom'>
      <div className='details-container'>
        <img src={imageUrl} alt='item' />
        <span className='name'>{name}</span>
      </div>
      <span className='price'>${price}</span>
      <span className='quantity'>{quantity}</span>
      <span className='amount'>${(quantity * price).toFixed(2)}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
