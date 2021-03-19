import { connect } from 'react-redux';

import CartItem from './cartItem/CartItem';

import { selectCartItems } from '../../../redux/cart/cartSelectors';

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

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
