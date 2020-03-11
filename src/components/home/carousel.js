import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact'
import spot1 from '../../assets/spotify.jpeg'
import spot2 from '../../assets/spot1.png'
import '../../styles/main.scss'

class Carousel extends Component {
    render() {
        return (
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={2}
                    showControls={true}
                    showIndicators={true}
                    interval={2000}
                    className="z-depth-1 "
                >
                    <MDBCarouselInner >
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className=" d-block w-100"
                                    src={spot1}
                                    alt="First slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className=" d-block w-100"
                                    src={spot2}
                                    alt="Second slide"
                                />
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}

export default Carousel
