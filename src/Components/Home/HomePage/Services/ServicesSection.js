import { MDBBtn, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch('https://desolate-escarpment-53329.herokuapp.com/services', {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                setServicesList(data);
            });
    }, [])
    return (
        <MDBContainer className="mb-5">
            <MDBTypography tag="h2" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                AUTO REPAIR SERVICES
            </MDBTypography>
            <MDBTypography tag="h6" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                We are one of the leading auto repair shops serving customers in Tucson.
                All mechanic services are performed by highly qualified mechanics
            </MDBTypography>
            <MDBRow>
                {
                    servicesList.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </MDBRow>
            <p className="text-center mb-4"><MDBBtn color="mdb-color">Read More <MDBIcon icon="angle-right" /></MDBBtn></p>
        </MDBContainer>
    );
};

export default ServicesSection;