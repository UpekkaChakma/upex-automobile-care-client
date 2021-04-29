import { MDBBtn } from 'mdbreact';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const OrderListTable = ({ order }) => {
    const { _id, email, title, date, status } = order;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://desolate-escarpment-53329.herokuapp.com/update/orderStatus/'+_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    swal("Product Successfully updated", {
                        icon: "success",
                    });
                } else {
                    swal({
                        title: "Something went wrong",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                }
            })
    };
    return (
        <tr>
            <td>{email}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>
                <form className=" d-flex align-self-center" onSubmit={handleSubmit(onSubmit)}>
                    <select style={{ padding: 0 }} {...register("status")} className="">
                        <option>{status}</option>
                        <option value="Pending">Pending</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Done">Done</option>
                    </select>
                    <MDBBtn className="px-3 py-1" type="submit" size="sm">Update</MDBBtn>
                </form>
            </td>
        </tr>
    );
};

export default OrderListTable;