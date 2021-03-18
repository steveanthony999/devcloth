import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserAlt,
  faHeart,
  faShoppingBag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import CartDropDown from './cart/CartDropDown';

import { auth } from '../../firebase/firebase';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import Logo from '../../images/logo.png';

import './navbar.scss';

const Navbar = ({ currentUser, toggleCartHidden, hidden, itemCount }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.3,
        duration: 0.2,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <>
      <nav className='main-nav'>
        <div className='upper-nav util-border-bottom'>
          <div className='util-container util-flex-center-between util-py-1 util-extra-small-heading'>
            <span>Free shipping on all orders over $99!</span>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div className='middle-nav util-py-4 util-border-bottom'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='lower-nav util-border-bottom'>
          <div className='util-container util-flex-center-between util-py-1'>
            <div>
              <NavLink to='/' className='util-mr-2'>
                Home
              </NavLink>
              <NavLink to='/shop' className='util-mr-2'>
                Shop
              </NavLink>
              <NavLink to='/' className='util-mr-2'>
                Blog
              </NavLink>
              <NavLink to='/' className='util-mr-2'>
                About Us
              </NavLink>
              <NavLink to='/' className='util-mr-2'>
                NFT
              </NavLink>
            </div>
            <div className='bottom-nav'>
              {/* ====================== USER ======================= */}
              {/* ====================== USER ======================= */}
              {/* ====================== USER ======================= */}
              <div onClick={toggleHoverMenu} className='nav-icon'>
                <FontAwesomeIcon icon={faUserAlt} />
                <motion.div
                  className='sub-menu'
                  initial='exit'
                  animate={isHover ? 'enter' : 'exit'}
                  variants={subMenuAnimate}
                >
                  <div className='sub-menu-container'>
                    {currentUser ? (
                      <>
                        <NavLink
                          to={`/profile/${currentUser.uid}`}
                          className='sub-menu-item'
                        >
                          {currentUser.displayName}
                        </NavLink>
                        <NavLink
                          to='/login'
                          className='sub-menu-item'
                          onClick={() => auth.signOut()}
                        >
                          Logout
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to='/login' className='sub-menu-item'>
                          Login
                        </NavLink>
                        <NavLink to='/register' className='sub-menu-item'>
                          Register
                        </NavLink>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
              {/* ==================== FAVORITES ==================== */}
              {/* ==================== FAVORITES ==================== */}
              {/* ==================== FAVORITES ==================== */}
              {currentUser && (
                <FontAwesomeIcon className='util-ml-2' icon={faHeart} />
              )}
              {/* ================== SHOPPING BAG =================== */}
              {/* ================== SHOPPING BAG =================== */}
              {/* ================== SHOPPING BAG =================== */}
              <div
                className='shopping-bag util-ml-2'
                onClick={toggleCartHidden}
              >
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className='bag-item-quantity'>{itemCount}</span>
                <motion.div
                  animate={hidden ? 'exit' : 'enter'}
                  variants={subMenuAnimate}
                >
                  {hidden ? null : <CartDropDown />}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className='mobile-nav'>
        <FontAwesomeIcon icon={faBars} />
        <img src={Logo} alt='logo' />
        <FontAwesomeIcon icon={faSearch} />
      </nav>
    </>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden, cartItems },
}) => ({
  currentUser,
  hidden,
  itemCount: cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
