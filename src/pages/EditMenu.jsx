import React from 'react';
import { useForm } from 'react-hook-form';

const EditMenu = ({ menuItems, addNewItem, fetchMenuItems, deleteMenuItem }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			itemname: '',
			itemdesc: '',
			itemprice: Number(),
			menuItemCategoryId: Number(),
		},
	});
	
	const onSubmit = data => {
		addNewItem(data)
		reset({
			itemname: '',
			itemdesc: '',
			itemprice: Number(),
			menuItemCategoryId: Number(),
		})
		fetchMenuItems();
	}

	return (
		<div className='m-2'>
			{/* MENU ITEM FORM */}
			<div>
				<form
					className="flex flex-col rounded overflow-hidden shadow-lg max-w-lg"
					onSubmit={handleSubmit((onSubmit))}>
					<label className='w-full md:w-1/2 px-3 mb-6 md:mb-0' htmlFor="menuItemCategoryId">Select A Category: </label>
					<select
						placeholder="Select A Category"
						className="capitalize font-bold text-xl mb-2"
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
					<input
						className="mx-1"
						type="text"
						placeholder="Item Name"
						{...register('itemname', { required: true, maxLength: 255 })}
					/>
					<input
						className="mx-1"
						type="text"
						placeholder="Item Contents"
						{...register('itemdesc', { required: true, maxLength: 255 })}
					/>
					<input
						className="mx-1"
						type="number"
						placeholder="Item Price"
						{...register('itemprice', { required: true })}
					/>

					<input
						type="submit"
						className="m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
					/>
				</form>
			</div>
					{/* MENU TABLES */}
			<div>
				{menuItems.map((itemcat) => (
					<div>
						<h1
							className="text-2xl uppercase title-font text-center"
							key={itemcat.itemcategory}
						>
							{itemcat.itemcategory}
						</h1>
						<table className="table-fixed capitalize">
							<thead>
								<tr className="text-font text-center">
									<th>Item Name</th>
									<th>Item Contents</th>
									<th>Item Price</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="text-font">
								{itemcat.menuItemList.map((item) => (
									<tr key={item.id}>
										<td>{item.itemname}</td>
										<td>{item.itemdesc}</td>
										<td>$ {item.itemprice}</td>
										<td>
											<button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
												Edit
											</button>
											<button onClick={()=> deleteMenuItem(item.id)} className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
