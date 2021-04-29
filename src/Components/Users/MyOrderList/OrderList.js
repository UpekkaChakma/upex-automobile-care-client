import React from 'react';

const OrderList = (props) => {
    const list = props.list;
    const { title, price, paymentId, status} = list;
    return (
        <tr>
            <td>{title}</td>
            <td>$ {price}</td>
            <td>{paymentId}</td>
            <td>{status}</td>
        </tr>
    );
};

export default OrderList;