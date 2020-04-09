import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from "reactstrap";

import { Link } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Navbar color='dark' light expand='md'>
				<NavbarBrand className='text-white' tag={Link} to='/'>
					React Hooks
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={open} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink
								className='btn btn-primary text-white'
								tag={Link}
								to='/geolocation'>
								Geolocalização
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='btn btn-secondary text-white'
								tag={Link}
								to='/useRef'>
								useRef
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='btn btn-success text-white'
								tag={Link}
								to='/helloTs'>
								HelloTS
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='btn btn-danger text-white'
								tag={Link}
								to='/ghRepositories'>
								Repositórios Github
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className='btn btn-warning text-white'
								tag={Link}
								to='/exampleUseCallback'>
								useCallback
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
