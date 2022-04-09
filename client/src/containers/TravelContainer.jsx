import React, {useEffect, useState} from 'react'
import TravelCard from '../common/travelCard'

const TravelContainer = props => {
    const tags = [
        {tag: "adventure"},
        {tag: "bike trip"},
    ]
    return (
        <div className="travel_container_main_wrapper">
            <div className='mx-auto travel_container m-0 p-0'>
                <div className="d-flex m-0 travel_wrapper row p-0">
                    <div className="col-lg-4 p-1">
                        <TravelCard date="Apr 11, 2021" author="Devang" tags={tags} travelLocation="Japan: A divine glimpse" tags={tags} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                    </div>
                    <div className="col-lg-4 p-1">
                        <TravelCard date="Apr 11, 2021" author="Devang" travelLocation="Nepal" tags={tags} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                    </div>
                    <div className="col-lg-4 p-1">
                        <TravelCard date="Apr 11, 2021" author="Devang" travelLocation="Nepal" tags={tags} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                    </div>
                    <div className="col-lg-4 p-1">
                        <TravelCard date="Apr 11, 2021" author="Devang" travelLocation="Nepal" tags={tags} content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                    </div>
                        {/* <TravelCard author="Devang" travelLocation="Bhutan" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                        <TravelCard author="Devang" travelLocation="Las Vegas" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/>
                        <TravelCard author="Devang" travelLocation="Japan" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"/> */}
                </div>
            </div>
        </div>
    )
}

export default TravelContainer