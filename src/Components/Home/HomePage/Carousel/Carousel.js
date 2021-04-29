import React from "react";
import { MDBCarousel, MDBCarouselCaption,
     MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBBtn } 
     from "mdbreact";
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="mb-5">
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
                                src="https://i.ibb.co/dPw7Ddp/worker-repairing-vehicle-min.jpg" 
                                alt="First slide"
   
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 className="h1-responsive">Car Repairing</h1>
                            <p>Your Car Is Safe With Us Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste, eum reiciendis, nobis quas doloribus ullam necessitatibus dicta consequuntur fugiat, possimus beatae! Incidunt hic qui, corrupti reiciendis odio, quo facere cum officiis, similique cumque magni corporis sed ad itaque! Illum.</p>
                            <MDBBtn color="light-green">Details</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/sj6HR3Z/man-polish-salon-car-garage-min.jpg"
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 className="h1-responsive text-center">Polish Your Car Like Fabulous</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquid eius impedit. Neque, facere commodi. Ipsam iusto ipsa sunt iure voluptates adipisci beatae officia modi at ullam esse ab, porro itaque perferendis numquam aliquid sit dolorem!</p>
                            <MDBBtn outline color="light">Visit our shop</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/R3ZwpMS/mechanic-changing-engine-oil-car-vehicle-min.jpg"
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h1 className="h1-responsive">We Provide Best Oil For Your Car</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, laborum placeat voluptatem voluptas tempora ex? Consequatur dolores rem ad similique sunt facilis veniam dolorem id in! Temporibus repellat voluptas labore?</p>
                            <MDBBtn>More power to yourself</MDBBtn>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
}

export default Carousel;