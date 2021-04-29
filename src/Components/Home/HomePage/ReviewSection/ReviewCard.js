import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdbreact';
import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, feedback, photoURL } = review;
    return (
        <MDBCol lg="4" sm="12" className="mb-4 p-3 d-flex justify-content-center align-items-center">
            <MDBCard style={{ maxWidth: "22rem" }} className=" p-3 d-flex justify-content-center align-items-center">
                <MDBCardImage className="img-fluid"
                    style={{ borderRadius: '50%' }}
                    src={photoURL} waves />
                <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>{feedback}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ReviewCard;