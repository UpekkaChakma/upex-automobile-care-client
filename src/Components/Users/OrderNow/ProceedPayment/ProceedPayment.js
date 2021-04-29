import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IiH5zFiBnyy862870zkgpoINuB480UVgAY4TcJjuGBoV5OQQWyWs4IJFZ8irz7v1nTKdPBmLPGTbOhTCFOqQzYv008cfPbZQv');

const ProceedPayment = ({handlePaymentSuccess}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
        </Elements>
    );
};

export default ProceedPayment;