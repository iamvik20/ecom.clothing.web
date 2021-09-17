import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectoe';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-contaier' to="/">
            <Logo className='logo' />
            <span className='logo-name'>CROWN CLOTHING</span>
        </Link>
        <div className='options'>
            <Link className='option' to='/' >
                HOME
            </Link>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            { currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                <Link className='option' to='/signin'>SIGN IN</Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
)

const maoStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(maoStateToProps)(Header);
