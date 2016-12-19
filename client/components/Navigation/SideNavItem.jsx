import React from 'react';
import { Link } from 'react-router';

const SideNavItem = ({img, name, linkTo, children}) => {
    return (
        <Link to={linkTo}>
            <li className='sidenav-item'>
                { img ? <img className='sidenav-img' src={img} /> : ''}
                {name ? <span>{name}</span> : ''}
                {children ? children : ''}
            </li>
        </Link>
    )
}

export default SideNavItem;
