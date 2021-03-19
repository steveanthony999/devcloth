import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { toggleCartHidden } from '../../../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../../../redux/cart/cartSelectors';

import './cartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='shopping-bag util-ml-2' onClick={toggleCartHidden}>
      <FontAwesomeIcon icon={faShoppingBag} />
      <span className='bag-item-quantity'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
