import React from 'react'
import BlogContainer from './BlogContainer'
import CarouselHOC from '../common/CarouselHOC'
import TravelCard from '../common/travelCard'
import LeftArrow from '../assets/leftArrow.svg'
import RightArrow from '../assets/rightArrow.svg'
import seeAll from '../assets/seeAll.svg'

const CarouselContent = props => {
    return (
        <div className="read_more">
            <svg className='d-block orig' width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M41.7071 7.29289C42.0976 7.68342 42.0976 8.31658 41.7071 8.70711L35.3431 15.0711C34.9526 15.4616 
                34.3195 15.4616 33.9289 15.0711C33.5384 14.6805 33.5384 14.0474 33.9289 13.6569L39.5858 8L33.9289 2.34315C33.5384 
                1.95262 33.5384 1.31946 33.9289 0.928932C34.3195 0.538408 34.9526 0.538408 35.3431 0.928932L41.7071 7.29289ZM3.56361e-09 
                7L41 7L41 9L-3.56361e-09 9L3.56361e-09 7Z" 
                fill="#ADACAC"/>
            </svg>

            <svg className='d-block anim' width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                d="M41.7071 7.29289C42.0976 7.68342 42.0976 8.31658 41.7071 8.70711L35.3431 15.0711C34.9526 15.4616 
                34.3195 15.4616 33.9289 15.0711C33.5384 14.6805 33.5384 14.0474 33.9289 13.6569L39.5858 8L33.9289 2.34315C33.5384 
                1.95262 33.5384 1.31946 33.9289 0.928932C34.3195 0.538408 34.9526 0.538408 35.3431 0.928932L41.7071 7.29289ZM3.56361e-09 
                7L41 7L41 9L-3.56361e-09 9L3.56361e-09 7Z" 
                fill="#53B049"/>
            </svg>

        </div>
    )
}

const Home = props => {
    const places = [
        {
            name: "Japan",
            desc: "A divine glimpse",
            link: "thedevang.com"
        },
        {
            name: "Japan",
            desc: "A divine glimpse",
            link: "thedevang.com"
        },
        {
            name: "Japan",
            desc: "A divine glimpse",
            link: "thedevang.com"
        },
        {
            name: "Japan",
            desc: "A divine glimpse",
            link: "thedevang.com"
        },
    ]
    return (
        <div className="_home">
            <div className='_blog_home_container'>
                <BlogContainer/>
            </div>
            <div className="_home_wrapper">
                <CarouselHOC 
                    Card={TravelCard} 
                    Array={places} 
                    LeftArrow={LeftArrow} 
                    RightArrow={RightArrow}
                    CarouselContent={CarouselContent}
                    />
            </div>
        </div>
    )
}

export default Home