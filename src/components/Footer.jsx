import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<div className="footer text-font bg-black flex justify-between p-5 ">
			<p className="tracking-widest">
				COPYRIGHT © 2021 LEFT BANK BURGER - ALL RIGHTS RESERVED.
			</p>
			<div>
				<Link className='mx-2' to="/apply">APPLY</Link>
				<Link className="mx-2" to="/edit-menu">
					<i className="fa-solid fa-pen-to-square"></i>
				</Link>
				<Link className="mx-2" to="/archive">
					<i className="fa-solid fa-user"></i>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
