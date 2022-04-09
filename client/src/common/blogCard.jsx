import React from 'react'
import BurgerIcon from '../assets/burgerIcon.svg'
import Popover from '@mui/material/Popover'
import { Link } from 'react-router-dom'
import Dropdown from '../common/Dropdown'
import Snackbar from '@mui/material/Snackbar';

const BlogCard = props => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };
    const dropdownContent = 
    <ul className='dropdown'>
        <li onClick={() => {
            navigator.clipboard.writeText(`http://localhost:3000/blog/` + props.id)
            handleClick({
                vertical: 'bottom',
                horizontal: 'left',
              })
        }}>
            Copy blog url
        </li>
        <hr style={{ backgroundColor: "white" }}/>
        <p className='mt-1'>Share</p>
        <div className="row d-flex m-0 p-0">
            <div className="col-md-4">
                <a href={"https://www.facebook.com/sharer/sharer.php?u=thedevang.com/blog/" + props.id} >
                    <i className='fa fa-facebook' />
                </a>
            </div>
            <div className="col-md-4">
                <a href={"https://twitter.com/share?url=thedevang.com/blog/" + props.id}>
                    <i className='fa fa-twitter' />
                </a>
            </div>
            <div className="col-md-4">
                <a href={"https://www.linkedin.com/sharing/share-offsite/?url=thedevang.com/blog/" + props.id}>
                    <i className='fa fa-linkedin' />
                </a>
            </div>
        </div>
    </ul>


    return (
        <div className='blog_card'>
            <div className="image">
                <Link to={props.type + '/' + props.id}>
                    <img src={props.image} className='img img-fluid blog_image' alt="" />
                </Link>
            </div>
            <div className="row m-0 p-0">
                <div className="p-0 m-0 d-flex align-items-center justify-content-start col-md-10">
                <Link to={props.type + '/' + props.id}>
                    <h3 className='name'>
                        {props.name}
                    </h3>
                </Link>
                </div>
                <div className="d-flex align-items-center justify-content-end col-md-2 burger">
                <div>
                    
                <Dropdown src={BurgerIcon} label="" Component={dropdownContent} />
                </div>
                
                </div>
            </div>
            <Link to={props.type + '/' + props.id}>
            <p className='content'>{props.content}</p>
            <p className='author'>by <span>{props.author}</span></p>
            </Link>
        </div>
    )
}

export default BlogCard