import React from 'react'
import Slider from "react-slick"
import axios, { base } from '../axios-pf'


const Carousel = props => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow : <SamplePrevArrow/>,
        nextArrow : <SampleNextArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
        <Slider {...settings}>
        {
            projects.map(m => 
                <div className="col-md-12 p-2 d-flex justify-content-center work-cards p-0">
                    <WorkCard title={m.name} description={m.desc} link={m.link} image={m.image} />
                </div>    
        )}
        </Slider>
    )
}

export default Carousel