import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import './UserReview.css';

const UserReview = () => {
    const [loggedInUser] = useContext(UserContext);
    const {name, email, photoURL} = loggedInUser;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const newData = {...data, name, email, photoURL};
        const url = 'https://desolate-escarpment-53329.herokuapp.com/user/review';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => {
                console.log('server side response', res);
                if (res.status !== 404) {
                    swal({
                        title: "Good job!",
                        text: "You added a Review!",
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

    return (
        <MDBContainer fluid >
            <MDBRow>
                <MDBCol md="3" sm="12" className="user-side-bar">
                    <UserSidebar />
                </MDBCol>

                <MDBCol md="9" sm="0" className="px-5 p-5">
                    <h4 style={{ fontWeight: '500' }}>Add Your Review</h4>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <MDBInput
                            name="name" disabled
                            type="text" label={name} className="mb-4" 
                        />
                        <MDBInput {...register("feedback", { required: true })}
                            name="feedback"
                            type="textarea" className="mb-4" label="Feedback" 
                        />
                        {errors.feedback && <span className="mr-2" style={{ color: 'red' }}>This field is required</span>}
                        <MDBBtn style={{ fontWeight: '500' }}
                            className="py-2 px-3"
                            type="submit"
                            color='info'>
                            Submit
                        </MDBBtn>
                    </form>
                    <MDBCol md="12" sm="0" className="d-flex justify-content-center align-items-center">
                        <img style={{ width: "425px" }}
                            src="https://i.ibb.co/WcCdjZB/client-review-web-screen-successful-4-4-star.jpg" alt="client-review-web-screen-successful-4-4-star" border="0"
                        />
                    </MDBCol>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default UserReview;