import React from 'react';

const Hero = () => {
	return (
		<div className="w-full h-screen bg-center bg-no-repeat bg-cover background-image">
			<div className="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center relative">
				<div className="flex flex-col">
					<div className="mx-4 text-center text-white">
						<h1 className="title-font text-6xl mb-4">Place Your Order</h1>
					</div>
					<a
						href="tel:2016304127"
						className="text-4xl border-2 border-white rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white text-center"
					>
						<i className="text-4xl fa-solid fa-phone"></i> 201-630-4127
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
