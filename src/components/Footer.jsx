import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<div className="footer text-font bg-black flex justify-between p-5 ">
			<p className='tracking-widest'>COPYRIGHT © 2021 LEFT BANK BURGER - ALL RIGHTS RESERVED.</p>
			<Link to="/edit-menu">
				<i class="fa-solid fa-pen-to-square"></i>
			</Link>
		</div>
	);
};

export default Footer;
