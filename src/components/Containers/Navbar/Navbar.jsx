import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = (props) => {
	const navPaths = props.pages.map((page) =>
		<NavLink to={'/'+page.toLowerCase()} activeStyle>
		{page}
		</NavLink>
	);
    return (
		<>
			<Nav>
			<Bars />
			<NavMenu>
				{navPaths}
			</NavMenu>
			</Nav>
		</>
    );
};

export default Navbar