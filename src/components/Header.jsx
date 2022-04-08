import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500  title-font bg-black text-slate-50 sticky top-0 text-2xl z-50">
		<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
			<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
				<Link className="" to="/">
					<div className="flex lg:text-4xl">
						<h1 className="">LEFT BANK</h1>
						<h1 className="brush-font shadow-font px-2 second-font">
							Burger Bar
						</h1>
					</div>
				</Link>
				<button
					className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<i className="fas fa-bars"></i>
				</button>
			</div>
			<div
				className={
					'lg:flex flex-grow items-center' +
					(navbarOpen ? ' flex' : ' hidden')
				}
				id="example-navbar-danger"
			>
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-xl">
					<li className="nav-item">
						<Link
							className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
							to="/menu"
						onClick={()=>setNavbarOpen(!navbarOpen)}>MENU</Link>
					</li>
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
							href="https://www.grubhub.com/restaurant/left-bank-burger-bar-194-newark-ave-jersey-city/293389"
						>
							ORDER
						</a>
					</li>
					<li className="nav-item">
						<Link
							className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
							to="/contact"
							onClick={()=>setNavbarOpen(!navbarOpen)}
						>CONTACT US</Link>
					</li>
					<li className="nav-item">
						<a
							className="px-3 pt-3 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75"
							href="https://www.instagram.com/lb_burgerbar/"
						>
							<i className="mx-2 fab fa-instagram text-lg leading-lg text-white opacity-75"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	);
};

export default Header;
