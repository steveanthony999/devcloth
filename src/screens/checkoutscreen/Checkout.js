import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';

import './checkout.scss';

const Checkout = ({ cartItems, total }) => {
  return (
    <section id='checkout'>
      <div className='checkout-container util-container'>
        <h1 className='util-medium-heading'>Shopping Cart</h1>
        <div className='checkout-details util-mt-4'>
          <h2 className='util-small-heading'>Order Summary</h2>
          <div className='checkout-header util-my-3 util-pb-3 util-border-bottom'>
            <div className='header-block'>
              <span className='util-extra-small-heading'>DETAILS</span>
            </div>
            <div className='header-block'>
              <span className='util-extra-small-heading'>UNIT PRICE</span>
            </div>
            <div className='header-block'>
              <span className='util-extra-small-heading'>QUANTITY</span>
            </div>
            <div className='header-block'>
              <span className='util-extra-small-heading'>AMOUNT</span>
            </div>
            <div className='header-block'>
              <span></span>
            </div>
          </div>
        </div>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className='total'>
          <span>TOTAL: ${total.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

// Product image, product description, price, quantity, remove

// clear cart button

// add note to order

// shipping estimates

// grand total - subtotal, shipping, total

// promo code

// free shipping progress bar

// saved for later
