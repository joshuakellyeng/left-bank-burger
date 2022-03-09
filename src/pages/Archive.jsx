import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Archive = () => {
	const [contacts, setContacts] = useState([]);
    const [applicants, setApplicants] = useState([])

	const fetchArchive = async () => {
		try {
			const res = await axios.get('http://localhost:8080/api/v1/allcontacts');
            const res2 = await axios.get('http://localhost:8080/api/v1/allapplicants')
			setContacts(res.data);
            setApplicants(res2.data)
		} catch (error) {
			console.log(error);
		}
	};

    const deleteContact = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/v1/allcontacts/${id}`)
            fetchArchive()
        } catch (error) {
            console.error(error)
        }
    }

    const deleteApplicant = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/api/v1/allapplicants/${id}`)
            fetchArchive()
        } catch (error) {
            console.error(error)
        }
    }

	useEffect(() => {
		fetchArchive();
	}, []);

    console.log(contacts, applicants)
	return (
		<div>
			<div>
					<div className='w-10/12 m-auto'>
						<h1 className="text-2xl uppercase title-font text-center py-5">
							Contacts
						</h1>
						<table className="table-auto capitalize">
							<thead>
								<tr className="text-center">
									<th>Name</th>
									<th>Email</th>
									<th>Message</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="">
								{contacts.map((contact) => (
									<tr key={contact.id}>
										<td>{contact.name}</td>
										<td>{contact.email}</td>
										<td>{contact.message}</td>
										<td>
											<button
												onClick={()=>deleteContact(contact.id)}
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

                    <div className='w-10/12 m-auto'>
						<h1 className="text-2xl uppercase title-font text-center py-5">
							Applicants
						</h1>
						<table className="table-auto capitalize">
							<thead>
								<tr className="text-center">
									<th>Name</th>
									<th>Phone</th>
									<th>Email</th>
									<th>Message</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody className="">
								{applicants.map((applicant) => (
									<tr key={applicant.id}>
										<td>{applicant.name}</td>
										<td>{applicant.phone}</td>
										<td>{applicant.email}</td>
										<td>{applicant.message}</td>
										<td>
											<button
												onClick={()=>deleteApplicant(applicant.id)}
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
			</div>
		</div>
	);
};

export default Archive;
