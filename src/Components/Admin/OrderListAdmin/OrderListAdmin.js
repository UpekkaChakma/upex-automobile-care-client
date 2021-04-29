import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListTable from './OrderListTable';

const OrderListAdmin = () => {
    const [allOrders, setAllOrders] = useState([]);

    //============= load all orders ===============================

    useEffect(() => {
        fetch('https://desolate-escarpment-53329.herokuapp.com/allOrdersList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, []);

    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="3" sm='12'>
                    <Sidebar></Sidebar>
                </MDBCol>
                <MDBCol md='9' sm='0'>
                    <MDBTypography tag="h2" colorText="blue-grey"
                        className="text-center mb-4 p-2 d-block"
                        style={{ fontWeight: "700", borderBottom: '1px solid grey' }}>
                        All Orders
                    </MDBTypography>
                    <MDBTable hover small>
                        <MDBTableHead color="primary-color" textWhite>
                            <tr>
                                <th>User</th>
                                <th>Service Name</th>
                                <th>Purchased Date</th>
                                <th>Status</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                allOrders.map(order => <OrderListTable order={order} key={order._id}></OrderListTable>)
                            }
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default OrderListAdmin;