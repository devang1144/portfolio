import React from 'react'
import Slider from "react-slick"
import { useParams } from 'react-router-dom'

const CarouselArrow = props => {
    return (
        props.type === undefined ? <div></div> 
        :
        props.type === "left" ?
        <img className={'slick-arrow slick-' + 'prev'} src={props.Arrow} onClick={props.onClick} alt="" />
        :
        <img className={'slick-arrow slick-' + 'next'} src={props.Arrow} onClick={props.onClick} alt="" />
    )
}

const CarouselHOC = props => {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow : 
            props.LeftArrow === undefined ? null : <CarouselArrow type="left" Arrow={props.LeftArrow} />,
        nextArrow : 
            props.RightArrow === undefined ? null : <CarouselArrow type="right" Arrow={props.RightArrow}/>,
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
        
        props.Array === undefined || props.Card === undefined ? 
        <div></div>
        :
        <div>
            <Slider {...settings}>
            {
                props.Array.map((m,k) => 
                    <div key={k} className="col-md-12 p-2 d-flex justify-content-center work-cards p-0">
                        <props.Card title={m.name} description={m.desc} link={m.link} image={m.image} />
                    </div>    
            )}
            </Slider>
            <div className="_carousel_content">
                <props.CarouselContent/>
            </div>
            
        </div>
    )
}

export default CarouselHOC