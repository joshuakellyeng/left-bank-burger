import React, {useState, useEffect, useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

//pages
import EditMenu from './pages/EditMenu';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Archive from './pages/Archive';

//components
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {

  const menuUrl = 'http://localhost:8080/api/v1/allmenuitems'

  const [menuItems, setMenuItems] = useState([]);

 

 
  //inital fetch menu

  const fetchMenuItems = useCallback(async () => {
    const res = await axios.get(menuUrl); 
    setMenuItems(res.data)
  }, [])

  //adding new menu items

  const addNewItem = (data) => {
    axios.post(menuUrl, data)
  }

  const deleteMenuItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/allmenuitems/${id}`)
      fetchMenuItems();
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMenuItems().catch(console.error)
  }, [fetchMenuItems])



	return (
		<div className='app-container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/edit-menu" element={<EditMenu menuItems={menuItems} addNewItem={addNewItem} fetchMenuItems={fetchMenuItems} deleteMenuItem={deleteMenuItem}/>}/>
        <Route path="/menu" element={<Menu menuItems={menuItems} />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/submissions" element={<Archive/>}/>
      </Routes>
      <Footer/>
		</div>
	);
};

export default App;
