import React from "react";
import {
    MDBCarousel, MDBCarouselCaption,
    MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn, MDBTypography
}
    from "mdbreact";

const MechanicCarousel = () => {
    return (
        <div className="mb-5">
            <MDBTypography tag="h2" colorText="blue-grey"
                className="text-center mb-4 p-2 "
                style={{ fontWeight: "700" }}>
                OUR TOP MECHANIC
            </MDBTypography>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/hF8JRD5/mechanic-holding-digital-tablet.jpg"
                                alt="mechanic-holding-digital-tablet"
                            />
                            <MDBMask />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Carl White</h3>
                            <p>Your Car Is Safe With Us Lorem ipsum dolor sit</p>
                            <MDBBtn>Details</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/WPBHn8T/senior-man-with-blue-jumpsuit-holding-wrench.jpg"
                                alt="senior-man-with-blue-jumpsuit-holding-wrench"
                            />
                            <MDBMask />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive text-center">Jimmy Webber</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <MDBBtn>Details</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/tp19rn7/man-with-wrench-his-hand.jpg"
                                alt="man-with-wrench-his-hand"
                            />
                            <MDBMask />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Nathan Statham</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum placeat voluptatem voluptas tempora ex? voluptas labore?</p>
                            <MDBBtn>Details</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

export default MechanicCarousel;