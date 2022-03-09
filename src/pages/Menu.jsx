import React from 'react';

const Menu = ({ menuItems }) => {
	return (
		<div className="py-20">
			<div className="text-center text-4xl flex flex-col items-center">
				<h1 className="shadow-font title-font uppercase">Left Bank</h1>
				<h1 className="second-font text-6xl brush-font capitalize">
					Burger Bar
				</h1>
				<h1 className="text-font burg my-2 w-9/12">
					194 newark ave jersey city, nj 201.630.4127 info@lbburgerbar.com
				</h1>
			</div>
			<div className="flex justify-center">
				<div className="grid lg:grid-cols-2 md:grid-cols-1 md:w-10/12">
					{menuItems.map((item) => (
						<div key={item.itemcategory} className="menu-cat">
							<h1 className="text-3xl text-center second-font shadow-font uppercase sub-title burg p-2 m-2 title-font tracking-widest">
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
