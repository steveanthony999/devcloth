import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserAlt,
  faHeart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { createStructuredSelector } from 'reselect';

import CartIcon from './cart/cartIcon/CartIcon';
import CartDropDown from './cart/CartDropDown';

import { auth } from '../../firebase/firebase';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import Logo from '../../images/logo.png';

import './navbar.scss';

const Navbar = ({ currentUser, hidden }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const variants = {
    initial: {
      scaleY: 0,
      originY: 0,
    },
    enter: {
      scaleY: 1,
      display: 'block',
    },
    exit: {
      scaleY: 0,
      display: 'none',
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
                  initial='initial'
                  animate={isHover ? 'enter' : 'exit'}
                  variants={variants}
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
              <CartIcon />
              {hidden ? null : (
                <AnimatePresence>
                  <CartDropDown />
                </AnimatePresence>
              )}
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
