import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBMask, MDBView } from 'mdbreact';
import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = ({ service }) => {
    const { _id, title, price, imageURL } = service;
    const history = useHistory()
    const handleHistory = () => history.push('/user/orderNow/' + _id);
    return (
        <MDBCol lg="4" sm="12" className="mb-4 d-flex justify-content-center align-items-center">
            <MDBCard style={{ maxWidth: "22rem" }}>
                <MDBView hover zoom>
                    <img
                        src={imageURL}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center">
                        <MDBBtn color="light-green">Details</MDBBtn>
                    </MDBMask>
                </MDBView>
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>Price: ${price}</MDBCardText>
                    <MDBBtn onClick={handleHistory} size="sm">buy now</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ServiceCard;