import { MDBContainer, MDBRow, MDBTypography } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSection = () => {

    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        fetch('https://desolate-escarpment-53329.herokuapp.com/reviews', {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => {
                setReviewList(data);
            });
    }, [])
    return (
        <MDBContainer>
            <MDBTypography tag="h2" colorText="blue-grey"
                className="text-center mb-2 p-2 "
                style={{ fontWeight: "700" }}>
                COMPANY REVIEW
            </MDBTypography>
            <MDBTypography tag="h6" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                We can help you with everything from an oil change to an engine change.
                We can handle any problem on both foreign and domestic vehicles
            </MDBTypography>
            <MDBRow>
                {
                    reviewList.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
            </MDBRow>
        </MDBContainer>
    );
};

export default ReviewSection;