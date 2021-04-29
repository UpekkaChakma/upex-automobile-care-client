import React, { useContext, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from "react-router";
import './Login.css';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        errorMessage: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //<============================================================================>

    //<=========================== google sign in===================================>
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    name: displayName,
                    email,
                    photoURL: photoURL
                }
                setLoggedInUser(signedInUser);

                //================check in admin list =====================

                fetch('https://desolate-escarpment-53329.herokuapp.com/isAdmin', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(signedInUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.length > 0) {
                            history.push('/admin/orderList');
                        } else {
                            history.replace(from);
                        }
                    });
            }).catch((error) => {
                const errorMsg = error.message;
                console.log(errorMsg);
                const newUser = { ...user };
                newUser.errorMessage = errorMsg;
                setUser(newUser);
            });
    }


    return (
        <MDBContainer>
            <MDBRow className="d-flex justify-content-center align-items-center mt-4">
                <MDBCol md="5" className=" p-5 shadow-box-example hoverable">
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4 mb-4">
                            <MDBBtn className="py-2 btn-rounded btn-block" color="indigo" type="submit">LOGIN</MDBBtn>
                        </div>
                    </form>
                    <MDBBtn onClick={handleGoogleSignIn}
                        style={{ fontWeight: '500' }} type="submit"
                        className=' btn-block mb-4 p-2 btn-rounded'
                        color='danger' rounded>
                        <MDBIcon fab icon="google" />
                         Login with Google
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;