import { MDBCol, MDBContainer, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Sidebar from '../Sidebar/Sidebar';
import ServiceCard from './ServiceCard';

const DeleteServices = () => {
    const [allServices, setAllServices] = useState([]);

    //============= load all saved game ===============================

    useEffect(() => {
        fetch('https://desolate-escarpment-53329.herokuapp.com/allServicesList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setAllServices(data);
            })
    }, []);

    //====================== delete a game ================================

    const deleteServiceById = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://desolate-escarpment-53329.herokuapp.com/deleteService/${id}`;
                    fetch(url, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.status !== 404) {
                                swal("Product Successfully Deleted", {
                                    icon: "success",
                                });
                                const newList = allServices.filter(service => service._id !== id);
                                setAllServices(newList);
                            }
                        })
                } else {
                    swal("Your game file is safe!");
                }
            });
    }
    return (
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md="3" sm="12" className="side-bar">
                    <Sidebar />
                </MDBCol>
                <MDBCol md="9" sm="0" className="px-5 pt-3 pb-5">
                    <MDBTypography tag="h2" colorText="blue-grey" 
                        className="text-center mb-4 p-2 d-block"
                        style={{fontWeight: "700",borderBottom: '1px solid grey'}}>All Services</MDBTypography>

                    {
                        allServices.map(service => <ServiceCard service={service} deleteServiceById={deleteServiceById} key={service._id}></ServiceCard>)
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default DeleteServices;