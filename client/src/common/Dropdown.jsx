import React, {useState} from 'react'
import BurgerIcon from '../assets/burgerIcon.svg'
import Popover from '@mui/material/Popover'
import { Link } from 'react-router-dom'

/* Props:
    src: icon image source
    Component: Dropdown inside component
    label: if 'src' is not provided, then only text is used as trigger
*/
const Dropdown = props => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined
    return (
        <div className='dropdown_comp'>
            <div className="label" aria-describedby={id} onClick={handleClick} >
                {
                props.src && <img 
                    className="burger_icon" src={props.src} alt="" />
                }
                <p>{props.label}</p>
            </div>
            <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
            {props.Component}        
            </Popover>
        </div>
    )
}

export default Dropdown