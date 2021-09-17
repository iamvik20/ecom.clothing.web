import React from 'react';
import './check-out.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckOutItems from '../../Components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../Components/stripe-button/stripe-button';

const CheckOutPage = ({cartItems, total}) =>  (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckOutItems key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>TOTAL: ${total}</div>
        <div className='test-warning' >
            * Please use the following test card for payments *
            <br/>
            4242 4242 4242 4242 - Exp: 11/23 - CVV: 321
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps, null)(CheckOutPage);
