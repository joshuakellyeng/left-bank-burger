import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

//pages
import EditMenu from './pages/EditMenu';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Archive from './pages/Archive';
import Apply from './pages/Apply';

//components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
	const menuUrl = 'https://lb-burgerbar.herokuapp.com/api/v1/allmenuitems';

	const [menuItems, setMenuItems] = useState([]);

	//inital fetch menu

	const fetchMenuItems = useCallback(async () => {
		const res = await axios.get(menuUrl);
		setMenuItems(res.data);
	}, []);

	// edit menu items
	useEffect(() => {
		fetchMenuItems().catch(console.error);
	}, [fetchMenuItems]);

	return (
		<div className="app-container">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/edit-menu"
					element={
						<EditMenu menuItems={menuItems} fetchMenuItems={fetchMenuItems} />
					}
				/>
				<Route path="/menu" element={<Menu menuItems={menuItems} />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/apply" element={<Apply />} />

			</Routes>
			<Footer />
		</div>
	);
};

export default App;
