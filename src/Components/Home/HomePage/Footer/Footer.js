
import React from 'react';
import './Footer.css';
import { MDBBadge, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer-area">
            <MDBContainer className="p-5">
                <MDBRow >
                    <MDBCol md="3" sm="12" className="mb-5 text-white">
                        <h5>ABOUT US</h5>
                        <p>Tucson, Khagrachhari 80210</p>
                        <p>501 Archwood Lane</p>
                        <p>Mobile:(520) 577 2710</p>
                        <p>Assistance:(520) 577 2725</p>
                        <p>E-mail:carservice@mail.com</p>
                        <Link> <MDBIcon className="mr-2 icon" fab icon="facebook" /></Link>
                        <Link><MDBIcon className="mr-2 icon" fab icon="google" /></Link>
                        <Link><MDBIcon className="mr-2 icon" fab icon="instagram" /></Link>

                    </MDBCol>
                    <MDBCol md="3" sm="12" className="mb-5 text-white">
                        <h5>OUR SERVICES</h5>
                        <p><MDBIcon icon="check" /> Engine Diagnostics</p>
                        <p><MDBIcon icon="check" /> Lube, Oil and Filters</p>
                        <p><MDBIcon icon="check" /> Belts and Hoses</p>
                        <p> <MDBIcon icon="check" />Air Conditioning</p>
                        <p><MDBIcon icon="check" /> Brake Repair</p>
                        <p><MDBIcon icon="check" /> Tire and Wheel Services</p>
                        <p> <MDBIcon icon="check" />Other Car Services</p>
                    </MDBCol>
                    <MDBCol md="3" sm="12" className="mb-5 text-white">
                        <h5>POPULAR TAGS</h5>
                        <MDBBadge className="mr-2" color="default">BELTS</MDBBadge>
                        <MDBBadge className="mr-2" color="default">BREAKS</MDBBadge>
                        <MDBBadge className="mr-2" color="default">DIAGNOSTICS</MDBBadge>
                        <MDBBadge className="mr-2" color="default">ENGINE</MDBBadge>
                        <MDBBadge className="mr-2" color="default">FILTER</MDBBadge>
                        <MDBBadge className="mr-2" color="default">HEATING</MDBBadge>
                        <MDBBadge className="mr-2" color="default">OILS</MDBBadge>
                        <MDBBadge className="mr-2" color="default">TIRES</MDBBadge>
                    </MDBCol>
                    <MDBCol md="3" sm="12" className="mb-5 text-white">
                        <h5>OPEN HOURS</h5>
                        <p>
                            Monday:7:30am - 5:30pm
                            Tuesday:7:30am - 5:30pm
                            Wednesday:7:30am - 5:30pm
                            Thursday:7:30am - 5:30pm
                            Friday:7:30am - 5:30pm
                            Saturday:7:30am - 3:00pm
                            Sunday:Closed
                       </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow around>


                </MDBRow>

            </MDBContainer>
        </footer>

    );
};

export default Footer;