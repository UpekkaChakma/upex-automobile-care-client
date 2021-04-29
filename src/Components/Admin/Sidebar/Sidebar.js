import { MDBCol, MDBIcon, MDBRow } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    const handleBgColorChange = (id) => {
        document.getElementById(id).style.backgroundColor = '#ffffff44';
    }
    return (
        <MDBRow className=" side-bar">
            <MDBCol lg="12" id="order" className=" sidebar-item">
                <Link to="/admin/orderList"
                    onClick={() => handleBgColorChange('order')}
                    className="link">
                    <MDBIcon far icon="list-alt" />
                     Order List
                    </Link>
            </MDBCol>
            <MDBCol lg="12" id="service" className=" sidebar-item" >
                <Link to="/admin/addService"
                    onClick={() => handleBgColorChange('service')}
                    className="link">
                    <MDBIcon icon="plus-square" />
                    Add Service
                </Link>
            </MDBCol>
            <MDBCol xl="12" id="admin" className=" sidebar-item">
                <Link to="/admin/makeAdmin"
                    onClick={() => handleBgColorChange('admin')}
                    className="link">
                    <MDBIcon icon="user-shield" />
                    Make Admin
                </Link>
            </MDBCol>
            <MDBCol xl="12" id="manage" className=" sidebar-item">
                <Link to="/admin/manageAllServices"
                    onClick={() => handleBgColorChange('manage')}
                    className="link">
                    <MDBIcon icon="th-large" />
                    Manage Services
                </Link>
            </MDBCol>
            <MDBCol xl="12" id="delete" className=" sidebar-item">
                <Link
                    to="/admin/deleteService"
                    onClick={() => handleBgColorChange('delete')}
                    className="link">
                    <MDBIcon icon="trash" />
                    Delete Services
                </Link>
            </MDBCol>
        </MDBRow>
    );
};

export default Sidebar;