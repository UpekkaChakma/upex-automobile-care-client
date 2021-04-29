import { MDBCol, MDBContainer, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import OrderList from './OrderList';

const MyOrderList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orderLists, setOrderLists] = useState([]);

    useEffect(() => {
        const url = 'https://desolate-escarpment-53329.herokuapp.com/user/totalOrderedLists';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(res => res.json())
            .then((result) => {
                setOrderLists(result);
            })
    }, [loggedInUser])

    return (
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md="3" sm="12" className="user-side-bar">
                    <UserSidebar />
                </MDBCol>
                <MDBCol md="9" sm="0" className="p-5">
                    <h4 style={{ fontWeight: '500' }}>My Order List</h4>
                    <MDBTable>
                        <MDBTableHead color="primary-color" >
                            <tr className="text-white">
                                <th>SERVICE</th>
                                <th>PRICE</th>
                                <th>PAYMENT ID</th>
                                <th>STATUS</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                orderLists.map(list => <OrderList key={list._id} list={list} ></OrderList>)
                            }
                        </MDBTableBody>
                        </MDBTable>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default MyOrderList;