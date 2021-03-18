import { connect } from 'react-redux';

import CartItem from './cartItem/CartItem';
import './cartDropDown.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}{' '}
      </div>
      <button className='btn btn-dark'>Checkout</button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
