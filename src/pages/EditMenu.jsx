import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditMenu = ({ menuItems, fetchMenuItems }) => {
	// react hook form
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			itemname: '',
			itemdesc: '',
			itemprice: Number(),
			menuItemCategoryId: Number(),
		},
	});

	const [editForm, setEditForm] = useState(false);
	const [menuItemToEdit, setMenuItemToEdit] = useState({});

	const handleEditMenuItem = (item) => {
		setEditForm(true);
		setValue('menuItemCategoryId', item.menuItemCategoryId);
		setValue('itemname', item.itemname);
		setValue('itemdesc', item.itemdesc);
		setValue('itemprice', item.itemprice);
		setMenuItemToEdit(item);
		console.log(item);
	};

	//on submition values will clear from input fields
	const onSubmit = async (data) => {
		setMenuItemToEdit(data);
		const newMenuItem = {
			menuItemCategoryId: data.menuItemCategoryId,
			itemname: data.itemname,
			itemdesc: data.itemdesc,
			itemprice: data.itemprice,
		};
		console.log(menuItemToEdit);
		console.log(data);
		console.log(newMenuItem)
		try {
			if (editForm) {
				const res = await axios.put(
					`https://lb-burgerbar.herokuapp.com/api/v1/allmenuitems/${menuItemToEdit.id}`,
					newMenuItem
				);

				if (res.status === 200) {
					reset({
						itemname: '',
						itemdesc: '',
						itemprice: Number(),
						menuItemCategoryId: Number(),
					});
				} else {
					console.log(newMenuItem);
				}
			} else {
				const res = await axios.post(
					`https://lb-burgerbar.herokuapp.com/api/v1/allmenuitems`,
					menuItemToEdit
				);
				if (res.status === 200) {
					reset({
						itemname: '',
						itemdesc: '',
						itemprice: Number(),
						menuItemCategoryId: Number(),
					});
				} else {
					console.log(newMenuItem);
				}
			}

			fetchMenuItems();
		} catch (error) {
			console.error(error);
		}
	};

	//deleting menu item
	const deleteMenuItem = async (id) => {
		try {
			const res = await axios.delete(
				`https://lb-burgerbar.herokuapp.com/api/v1/allmenuitems/${id}`
			);
			fetchMenuItems();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="p-20">
			<h1 className="text-5xl title-font text-center pb-5">
				Add A New Item To The Menu
			</h1>
			{/* MENU ITEM FORM */}
			<div className="border-solid border-2 p-2 rounded-md" id="menu-item">
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* form container */}
					<div className="flex flex-col">
						{/* select options container */}
						<div className="">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="menuItemCategoryId"
							>
								Select A Category:{' '}
							</label>
							<select
								placeholder="Select A Category"
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
								{...register('menuItemCategoryId', { required: true })}
							>
								<option value="1">appetizers</option>
								<option value="2">fries</option>
								<option value="3">salads</option>
								<option value="4">burgers & sandwiches</option>
								<option value="5">draft beer</option>
								<option value="6">bottles</option>
								<option value="7">cans</option>
								<option value="8">wines</option>
								<option value="9">beer & shot specials</option>
								<option value="10">cocktails</option>
								<option value="11">build your own</option>
								<option value="12">weekly burger battle</option>
							</select>
						</div>
						{/* input options container*/}
						<div>
							<label
								className=" my-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="itemname"
							>
								Name:{' '}
							</label>
							<input
								className="my-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								placeholder="What's it Called?"
								{...register('itemname', { required: true, maxLength: 255 })}
							/>
							<label
								className=" my-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="itemdesc"
							>
								Contents:{' '}
							</label>
							<input
								className="my-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="text"
								placeholder="What's in it?"
								{...register('itemdesc', { required: false, maxLength: 255 })}
							/>
							<label
								className="my-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="itemprice"
							>
								Price:{' '}
							</label>
							<input
								className="my-2 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								type="number"
								{...register('itemprice', { required: true })}
							/>

							<input
								type="submit"
								className="my-2 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
							/>
						</div>
					</div>
				</form>
			</div>
			{/* MENU TABLES */}
			<div>
				{menuItems.map((itemcat) => (
					<div key={itemcat.itemcategory}>
						<h1 className="text-2xl uppercase title-font text-center py-5">
							{itemcat.itemcategory}
						</h1>
						<table className="table-fixed capitalize">
							<thead>
								<tr className="text-center">
									<th>Item Name</th>
									<th>Item Contents</th>
									<th>Item Price</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="">
								{itemcat.menuItemList.map((item) => (
									<tr key={item.id}>
										<td>{item.itemname}</td>
										<td>{item.itemdesc}</td>
										<td>$ {item.itemprice}</td>
										<td>
											<button
												href={'menu-item'}
												onClick={() => handleEditMenuItem(item)}
												className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											>
												Edit
											</button>
											<button
												onClick={() => deleteMenuItem(item.id)}
												className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				))}
			</div>
		</div>
	);
};

export default EditMenu;
