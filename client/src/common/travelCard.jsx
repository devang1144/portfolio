import React from 'react'
import Image from '../assets/pagoda.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Calendar from '../assets/calendar.svg'
import { Link } from 'react-router-dom'
const TravelCard = props => {
    return (
        <div className="travel_card p-2">
            <Link to={"/travel/" + props.slug}>
                <div className="image-wrapper">
                    <img src={Image} className="travel-card-image img img-fluid" alt=""/>
                </div>
            </Link>
            <div className="tags">
                {
                    props.tags === undefined ? "" : props.tags.map((m, k) => 
                        <span key={k}>{m.tag}</span>
                    )
                }
            </div>
            
            <span className='white-line' />
            
            <h5 className="travel-location" style={{ color:`${props.color}` }}>{props.travelLocation}</h5>
            <h5 className="blog-card-title">{props.name}</h5>

            <span className="extra">
                <span className='calendar'>
                    <i className='fa fa-calendar' />
                    <span>{props.date}</span>
                </span>
                <span className="author"><i className="fa pr-1 fa-user-circle" />{props.author}</span>
            </span>
        </div>
    )
}

export default TravelCard