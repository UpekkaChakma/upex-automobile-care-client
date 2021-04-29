import { MDBBtn, MDBCol, MDBIcon, MDBMask, MDBRow, MDBView } from 'mdbreact';
import React from 'react';

const ServiceCard = ({ service, deleteServiceById }) => {
    const { _id, title, price, imageURL, description } = service;
    return (
        <MDBRow className="mb-3 p-4 shadow-box-example hoverable">
            <MDBCol>
                <MDBView hover zoom>
                    <img
                        src={imageURL}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                        <MDBBtn color="light-green">Details</MDBBtn>
                    </MDBMask>
                </MDBView>
            </MDBCol>
            <MDBCol>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>$ {price}  <MDBBtn onClick={() => deleteServiceById(_id)} color="danger" size="sm"><MDBIcon icon="trash" /> delete</MDBBtn> </p>
            </MDBCol>
        </MDBRow>
    );
};

export default ServiceCard;