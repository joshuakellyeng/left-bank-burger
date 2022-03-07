import React from 'react';
import { useForm } from 'react-hook-form';

const EditMenu = ({
	menuItems,
	addNewItem,
	fetchMenuItems,
	deleteMenuItem,
}) => {
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

	const onSubmit = (data) => {
		addNewItem(data);
		reset({
			itemname: '',
			itemdesc: '',
			itemprice: Number(),
			menuItemCategoryId: Number(),
		});
		fetchMenuItems();
	};

	return (
		<div className="m-2">
			{/* MENU ITEM FORM */}
			<div className="border-solid border-4">
				<form className="" onSubmit={handleSubmit(onSubmit)}>
					{/* form container */}
					<div className='flex flex-col'>
						{/* select options container */}
						<div className=''>
							<label className="w-100" htmlFor="menuItemCategoryId">
								Select A Category:{' '}
							</label>
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
						</div>
						{/* input options container*/}
						<div>
							<label className="" htmlFor="itemname">
								Name:{' '}
							</label>
							<input
								className="mx-1"
								type="text"
								placeholder="What's it Called?"
								{...register('itemname', { required: true, maxLength: 255 })}
							/>
							<label className="" htmlFor="itemdesc">
								Contents:{' '}
							</label>
							<input
								className="mx-1"
								type="text"
								placeholder="What's in it?"
								{...register('itemdesc', { required: true, maxLength: 255 })}
							/>
							<label className="" htmlFor="itemprice">
								Price:{' '}
							</label>
							<input
								className="mx-1 w-20"
								type="number"
								{...register('itemprice', { required: true })}
							/>

							<input
								type="submit"
								className="m-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
							/>
						</div>
					</div>
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
