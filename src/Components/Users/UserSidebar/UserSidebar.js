import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = () => {
    return (
        <MDBRow className="">
            <MDBCol lg="12" className=" user-sidebar-item">
                <Link to="/user/orderNow" className="user-link">
                    <img style={{width: '52px'}} 
                    src="https://i.ibb.co/p1KtcPd/add-to-cart.png" alt="add-to-cart" border="0" />
                    Order Now
                </Link>
            </MDBCol>
            <MDBCol lg="12" className=" user-sidebar-item" >
                <Link to="/user/myOrderList" className="user-link">
                    <img style={{width: '52px'}}
                    src="https://i.ibb.co/ZGKC5kr/note.png" alt="note" border="0" />
                    Order List
                </Link>
            </MDBCol>
            <MDBCol xl="12" className=" user-sidebar-item">
                <Link to="/user/review" className="user-link">
                    <img style={{width: '52px'}} 
                    src="https://i.ibb.co/CtzG6Rj/customer-review.png" alt="customer-review" border="0" />
                    Review
                </Link>
            </MDBCol>
        </MDBRow>
    );
};

export default UserSidebar;