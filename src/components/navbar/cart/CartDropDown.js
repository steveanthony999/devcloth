import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from './cartItem/CartItem';

import { selectCartItems } from '../../../redux/cart/cartSelectors';

import './cartDropDown.scss';

const CartDropDown = ({ cartItems, history }) => {
  const variants = {
    initial: {
      scaleY: 0,
      originY: 0,
    },
    enter: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  return (
    <motion.div
      className='cart-dropdown'
      key='dropdown'
      variants={variants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message util-small-heading'>
            Your cart is empty
          </span>
        )}
      </div>
      <button
        className='btn btn-dark'
        onClick={() => history.push('/checkout')}
      >
        Checkout
      </button>
    </motion.div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
