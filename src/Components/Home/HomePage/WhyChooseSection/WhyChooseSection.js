import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBTypography, MDBBtn, MDBIcon } from 'mdbreact';

const WhyChooseSection = () => {
    return (
        <MDBContainer className="mt-5 mb-5">
            <MDBTypography tag="h2" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                WHY CHOOSE US?
            </MDBTypography>
            <MDBTypography tag="h6" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                We are one of the leading auto repair shops serving customers in Tucson.
                All mechanic services are performed by highly qualified mechanics
            </MDBTypography>
            <MDBRow>
                <MDBCol lg="4" sm="12" className="mb-4">
                    <MDBCard className="d-fex justify-content-center align-items-center p-3">
                        <MDBCardImage className="img-fluid"
                            style={{ width: '80px' }}
                            src="https://i.ibb.co/nj8KpPt/padlock.png" alt="padlock" border="0" waves />
                        <MDBCardBody className="text-center">
                            <MDBCardTitle>EVERY JOB IS PERSONAL</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" sm="12" className="mb-4">
                    <MDBCard className="d-fex justify-content-center align-items-center p-3">
                        <MDBCardImage
                            style={{ width: '80px' }}
                            className="img-fluid" src="https://i.ibb.co/jfxNh91/setting.png" alt="setting" border="0" waves />
                        <MDBCardBody className="text-center">
                            <MDBCardTitle>BEST MATERIALS</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="4" sm="12" className="mb-4">
                    <MDBCard className="d-fex justify-content-center align-items-center p-3">
                        <MDBCardImage
                            style={{ width: '80px' }}
                            className="img-fluid" src="https://i.ibb.co/rkKsdYw/compliant.png" alt="compliant" border="0" waves />
                        <MDBCardBody className="text-center">
                            <MDBCardTitle>INDUSTRY STANDARDS</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                        </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <p className="text-center mb-4"><MDBBtn color="mdb-color">Read More <MDBIcon icon="angle-right" /></MDBBtn></p>
        </MDBContainer>
    )
}

export default WhyChooseSection;