import React from 'react';
import Map from '../components/Map';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Apply = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: '',
            phone: '',
			email: '',
			message:'',
		},
	});
	const onSubmit = async (data) => {
		const newApplicant = {
			name: data.name,
            phone: data.phone,
			email: data.email,
			message: data.message
		}
		try {
			const res = await axios.post('http://localhost:8080/api/v1/allapplicants', newApplicant)
			console.log(newApplicant)
			
		} catch (error) {
			console.error(error)
		}
		reset({
			name: '',
            phone: '',
			email: '',
			message: ''
		})

}


	return (
		<div className="w-full py-20">
			<h1 className="title-font text-6xl text-center pb-5 mt-5 uppercase">Apply Now!</h1>
			<h1 className="title-font text-5xl text-center pb-5 mt-5">HIRING ALL POSITIONS
			</h1>
            <h1 className="title-font text-5xl text-center pb-5 mt-5">FULL TIME & PART TIME AVAILABLE
			</h1>

			<div className="w-10/12 m-auto mt-5">
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="name"
						>
							Name:{' '}
						</label>
						<input
							className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500"
							type="text"
							placeholder="Name"
							{...register('name', { required: true, maxLength: 255 })}
						/>
                        <label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="phone"
						>
							Phone:{' '}
						</label>
						<input
							className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500"
							type="text"
							placeholder="Phone"
							{...register('phone', { required: true, maxLength: 255 })}
						/>
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="email"
						>
							Email:{' '}
						</label>
						<input
							className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-red-500"
							type="text"
							placeholder="Email"
							{...register('email', { required: true, maxLength: 255 })}
						/>
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="message"
						>
							Message:{' '}
						</label>
						<textarea
							type="text"
							className=" form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
							placeholder="Message"
							{...register('message', { required: true, maxLength: 255 })}
						/>

						<input
							type="submit"
							className="my-2 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						/>
					</form>
				</div>
				<div className="text-center title-font uppercase text-2xl border-2">
					<p className='text-3xl py-2 underline'>LEFT BANK BURGER BAR</p>
					<p>194 Newark Ave, Jersey City, NJ 07302</p>
					<p>2016304127</p>
					<div className="mb-3">
						<p className='text-3xl py-2 underline'>HOURS</p>
						<ul >
							<li>SUN-THURS 11:30 AM - 9:00 PM</li>
							<li>FRI-SAT 11:30 AM - 10:00 PM</li>
						</ul>
					</div>
					<Map />
				</div>
			</div>
		</div>
	);
};

export default Apply;
