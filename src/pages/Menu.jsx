import React from 'react';

const Menu = ({ menuItems }) => {

	return (
		<div className='p-20'>
			<div className="text-center text-2xl">
				<h1 className="main-font title-font uppercase ">left bank</h1>
				<h1 className="second-font text-4xl brush-font capitalize">
					Burger Bar
				</h1>
			</div>
			<div className='flex justify-center'>
				<div className="grid lg:grid-cols-2 lg:w-1/2 md:grid-cols-1 md:w-full">
					{menuItems.map((item) => (
						<div key={item.itemcategory} className="">
							<h1 className="text-3xl text-center uppercase sub-title burg p-2 m-2 title-font tracking-widest">
								{item.itemcategory}
							</h1>

							{item.menuItemList.map((item) => (
								<div key={item.id} className=" text-2xl m-2 p-2 text-center">
									<h4 className="title-font uppercase">
										{item.itemname}{' '}
										{item.itemprice === 0 ? ' ' : `. . . ${item.itemprice}`}
									</h4>
									<p className="text-xl text-font">{item.itemdesc}</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menu;
