import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import './OrderNow.css';
import ProceedPayment from './ProceedPayment/ProceedPayment';

const OrderNow = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [shippingData, setShippingData] = useState(null);
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [foundedService, setFoundedService] = useState({});
    const{title, description, price} = foundedService;

    useEffect(() => {
        const url = `https://desolate-escarpment-53329.herokuapp.com/findService/${id}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                setFoundedService(result[0])
            })
    }, [id]);

    const onSubmit = data => {
        const newDate = new Date();
        const orderDate = newDate.toLocaleDateString();
        const newData = {
            address: data.address,
            phone: data.phone,
            orderTime: orderDate
        }
        setShippingData(newData);
    };

    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = { ...loggedInUser, ...shippingData, title, description, price, paymentId, status: 'pending' }

        fetch('https://desolate-escarpment-53329.herokuapp.com/addOrder', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status !== 404) {
                    alert('Your order placed successfully');
                } else {
                    alert('Something went wrong, order failed');
                }
            })
    }

    return (
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md="3" sm="12" className="user-side-bar">
                    <UserSidebar />
                </MDBCol>
                <MDBCol md="6" sm="0" className="p-5">
                    <h4 style={{ fontWeight: '500' }}>Order Now</h4>
                    <MDBCol>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <MDBInput name="address" label="Address" className="mb-4" {...register("address", { required: true })} />
                            {errors.address && <span style={{ color: "red" }} >This field is required</span>}
                            <MDBInput name="phone" type="number" className="mb-4" label="Phone Number" {...register("phone", { required: true })} />
                            {errors.phone && <span style={{ color: "red" }} >This field is required</span>}
                            <MDBBtn style={{ fontWeight: '500' }} type="submit" className=' btn-block mb-4 p-2' color='info'>Checkout</MDBBtn>
                        </form>
                    </MDBCol>
                    <MDBCol style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                        <h6>PAY WITH CREDIT CARD</h6>
                        <ProceedPayment handlePaymentSuccess={handlePaymentSuccess} ></ProceedPayment>
                    </MDBCol>
                </MDBCol>
                <MDBCol md="3" sm="0" className="d-flex justify-content-center align-items-center">
                    <img style={{ width: "325px" }} src="https://i.ibb.co/JHwTf2q/plus-button-credit-card-vector-illustration-isolated-concept-opening-bank-account-paying-medical-ser.jpg" alt="plus-button-credit-card-vector-illustration-isolated-concept-opening-bank-account-paying-medical-ser" border="0"></img>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default OrderNow;