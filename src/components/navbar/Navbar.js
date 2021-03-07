import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUserAlt,
  faHeart,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

import './navbar.scss';
import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav>
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
            <NavLink to='/' className='util-mr-2'>
              Blog
            </NavLink>
            <NavLink to='/' className='util-mr-2'>
              About Us
            </NavLink>
          </div>
          <div>
            <FontAwesomeIcon className='util-ml-2' icon={faUserAlt} />
            <FontAwesomeIcon className='util-ml-2' icon={faHeart} />
            <FontAwesomeIcon className='util-ml-2' icon={faShoppingBag} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
