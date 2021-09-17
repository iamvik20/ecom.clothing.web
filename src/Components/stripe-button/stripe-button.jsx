import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JaePnSJMdPBqwWAuFaugz5qrZFFaUKDlQzPl4Q3MT0VFpZ8S3GWNOBdiC8Jz7LIRaLVnfp6kII2GbOcJVvXNKlr00PPBDtfEo';

    const onToken = token => {
        alert('Payment Succesfull');
    } 
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton
