import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserAlt,
  faHeart,
  faShoppingBag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase/firebase';

import './navbar.scss';
import Logo from '../../images/logo.png';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ currentUser }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
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
            </div>
            <div className='bottom-nav'>
              {/* <NavLink to='/login' className='util-ml-2'>
                <FontAwesomeIcon icon={faUserAlt} />
              </NavLink> */}
              {/* {currentUser ? (
                <NavLink
                  to='/login'
                  className='util-ml-2'
                  onClick={() => auth.signOut()}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink to='/login' className='util-ml-2'>
                  Log In
                </NavLink>
              )} */}
              {/* <FontAwesomeIcon className='util-ml-2' icon={faHeart} /> */}
              {/* <FontAwesomeIcon className='util-ml-2' icon={faShoppingBag} /> */}
              <motion.div
                onHoverStart={toggleHoverMenu}
                onHoverEnd={toggleHoverMenu}
                className='nav-icon'
              >
                <FontAwesomeIcon icon={faUserAlt} />
                <motion.div
                  className='sub-menu'
                  initial='exit'
                  animate={isHover ? 'enter' : 'exit'}
                  variants={subMenuAnimate}
                >
                  {/* <div className='sub-menu-background' /> */}
                  <div className='sub-menu-container'>
                    {currentUser ? (
                      <NavLink
                        to='/login'
                        className='sub-menu-item'
                        onClick={() => auth.signOut()}
                      >
                        Logout
                      </NavLink>
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
              </motion.div>
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

export default Navbar;
