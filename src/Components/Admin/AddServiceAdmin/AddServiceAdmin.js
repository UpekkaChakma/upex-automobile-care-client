import axios from 'axios';
import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Sidebar from '../Sidebar/Sidebar';
import './AddServiceAdmin.css'

const AddServiceAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            title: data.title,
            description: data.description,
            price: Number(data.price),
            imageURL: imageURL
        };
        const url = 'https://desolate-escarpment-53329.herokuapp.com/admin/addService';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res);
                if (res.status !== 404) {
                    swal({
                        title: "Good job!",
                        text: "You added this service to database!",
                        icon: "success",
                        button: "Close",
                    });
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

    const handleImageUpload = event => {
        //console.log(event.target.files[0])
        document.getElementById('success-error-txt').innerText = 'Uploading to ImgBB';
        document.getElementById('success-error-txt').style.color = 'tomato';
        const imageData = new FormData();
        imageData.set('key', '51794bdd439c0ef7fc6590b2dd17c754');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
                document.getElementById('success-error-txt').innerText = 'Upload Successful';
                document.getElementById('success-error-txt').style.color = 'green';
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md="3" sm="12" className="side-bar">
                    <Sidebar />
                </MDBCol>
                <MDBCol md="9" sm="0" className="px-5 pt-2 pb-5">
                    <MDBRow className="d-flex justify-content-center">
                        <img style={{ width: "415px" }} src="https://i.ibb.co/Yf31QbD/Businessman-with-car-remote-key-and-woman-with-shield-at-car-with-padlock-Car-alarm-system-anti-thef.jpg" alt="Businessman-with-car-remote-key-and-woman-with-shield-at-car-with-padlock-Car-alarm-system-anti-thef" border="0"></img>
                    </MDBRow>
                    <h4 style={{ fontWeight: '500' }}>Add Service</h4>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <MDBInput name="title"
                            {...register("title", { required: true })}
                            label="Service title"
                            className="mb-4"
                        />
                        {errors.title && <span className="mr-2" style={{ color: 'red' }}>This field is required</span>}

                        <MDBInput name="description"
                            {...register("description", { required: true })}
                            type="textarea"
                            className="mb-4" label="Description"
                        />
                        {errors.description && <span className="mr-2" style={{ color: 'red' }}>This field is required</span>}

                        <MDBInput name="price"
                            {...register("price", { required: true })}
                            type="number"
                            className="mb-4" label="Price"
                        />
                        {errors.price && <span className="mr-2" style={{ color: 'red' }}>This field is required</span>}

                        <input onChange={handleImageUpload} type="file" id="fileUpload" className="mb-4" />
                        <p id="success-error-txt"></p>
                        <MDBBtn style={{ fontWeight: '500' }} type="submit" className=' btn-block mb-4 p-2' color='indigo'> Add Service</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default AddServiceAdmin;