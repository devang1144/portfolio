import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios, {base} from '../axios-pf'

//https://stackoverflow.com/questions/54715462/react-scroll-how-to-scroll-to-a-specific-targeted-component-when-clicking-on-n

const Navbar = props => {

    const [isOpen, setOpen] = useState(false);
    const [width, setWidth] = useState("-300px")

    const ref = useRef()

    const toggleSideBar = () => {
        setWidth("0px")
    }
    const toggleSideBarClose = () => {
        setWidth("-300px")
    }
    const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            setWidth("-300px")
        }
    };
    document.body.style.overflow = width !== "-300px" ? "hidden" : "visible"

    return (
        <div style={{backgroundColor:props.navbarColor}} className="navbar__container container-fluid p-0">
            <div className="d-flex _navbar">
                <div className="brand">
                    <h3 className='orig'>Devang Singh</h3>
                    <h3 className='anim'>Devang Singh</h3>
                    
                </div>
                <div className="d-flex justify-content-end links">
                    <Link to="/about"><span>About</span></Link>
                    <Link to="/education"><span>Education</span></Link>
                    <Link to="/travel"><span>Travel</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar