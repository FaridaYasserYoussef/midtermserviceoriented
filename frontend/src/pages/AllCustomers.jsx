import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

 const AllCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] =  useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/customers').then(
            (response) =>{
                console.log(response.data.data);
                setCustomers(response.data);
                setLoading(false);
                
            }).catch((error)=> {
                console.log(error);
            })
    }, []);
    return(
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Customers List</h1>
                <Link to = '/customers/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                    
                </Link>

            </div>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <table className='w-full border-separate border-spacing-2'>
                        <thead>
                            <tr>
                                <th className='border border-slate-600 rounded-md'>No</th>
                                <th className='border border-slate-600 rounded-md'>Name</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Email</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Phone Number</th>
                                <th className='border border-slate-600 rounded-md'>Operations</th>


                            </tr>

                        </thead>

                        <tbody>
                            {customers.map((customer, index) => (

                                <tr key={customer._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {index + 1}
                                    </td>

                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {customer.name}
                                    </td>

                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {customer.email}
                                    </td>

                                    <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                        {customer.phoneNumber}
                                    </td>

                                    <td className='border border-slate-700 rounded-md text-center'>
                                        <div className='flex justify-center gap-x-4'>
                                            <Link to={`/customers/details/${customer._id}`}>
                                                <BsInfoCircle className='text-2xl text-green-800' />
                                            </Link>
                                            <Link to={`/customers/edit/${customer._id}`}>
                                                <AiOutlineEdit className='text-2xl text-yellow-600' />
                                            </Link>
                                            <Link to={`/customers/delete/${customer._id}`}>
                                                <MdOutlineDelete className='text-2xl text-red-600' />
                                            </Link>
                                        </div>
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </table>
                )
            }



        </div>
    )
 }

 export default AllCustomers