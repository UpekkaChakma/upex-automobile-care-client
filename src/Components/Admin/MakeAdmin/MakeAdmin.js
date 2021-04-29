import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = 'https://desolate-escarpment-53329.herokuapp.com/admin/makeAdmin';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log('server side response', res);
            if (res.status !== 404) {
                swal({
                    title: "Good job!",
                    text: "You added this person as ADMIN!",                    
                    icon: "success",
                    button: "Close",
                });
                document.getElementById('email-input').innerText = '';
            } else {
                swal({
                    title: "ERROR!!!",
                    text: "FAILED",                    
                    icon: "error",
                    button: "Close",
                });
            }
        });
    };
  

return (
    <MDBContainer fluid >
        <MDBRow>
            <MDBCol md="3" sm="12" className="side-bar">
                <Sidebar></Sidebar>
            </MDBCol>
            <MDBCol md="9" sm="0" className="px-5 pt-2 pb-5">
                <MDBRow className="d-flex justify-content-center">
                    <img style={{ width: "415px" }} src="https://i.ibb.co/S3fQ41P/business-partners-signing-document-tiny-characters-with-pen-paper-with-signature-seal-flat-illustrat.jpg" alt="business-partners-signing-document-tiny-characters-with-pen-paper-with-signature-seal-flat-illustrat" border="0"></img>
                </MDBRow>
                <h2 style={{ fontWeight: '500' }}>Add Admin</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <MDBInput name="email"
                        id="email-input"
                        {...register("email", { required: true })}
                        label="Input Email" type="email" 
                    />
                    {errors.email && <span className="mr-2" style={{ color: 'red' }}>This field is required</span>}
                    <MDBBtn style={{ fontWeight: '500' }}
                        type="submit" color='indigo'
                        className="py-2 px-3 ml-0">
                        Make Admin
                    </MDBBtn>
                </form>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
);
};

export default MakeAdmin;