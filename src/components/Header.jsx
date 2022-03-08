import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='text-4xl flex justify-between p-10 title-font bg-black text-slate-50'>
			<Link className='hover:underline' to="/">Home</Link>
			<div className='relative left-10'>
				<Link className='hover:underline' to="/menu">Menu</Link>
			</div>
            <div className=''>
                <a className='m-3 p-3' href="https://www.instagram.com/lb_burgerbar/"><i class="hover:underline fa-brands fa-instagram"></i></a>
                <a className='m-3 p-3' href="https://www.grubhub.com/restaurant/left-bank-burger-bar-194-newark-ave-jersey-city/293389"><i class="hover:underline fa-solid fa-utensils"></i></a>
            </div>
		</div>
	);
};

export default Header;
