import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
		<>
			<Nav>
			<Bars />
			<NavMenu>
				<NavLink to='/clubs' activeStyle>
				Clubs
				</NavLink>
				{/* Second Nav */}
				{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
			</NavMenu>
			</Nav>
		</>
    );
};

export default Navbar