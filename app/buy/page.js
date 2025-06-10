"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await axios.post('/api/saveAddress', formData);
            alert("Address saved successfully!");
            setFormData({ name: "", phone: "", email: "", address: "" });
        } catch (error) {
            console.error("Error saving address:", error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex gap-1'>

                {/* Address Section */}
                <div className='border-2 rounded-lg border-b-fuchsia-300 my-4 flex flex-col gap-4 justify-center items-center width-1/2'>
                    <div className='font-extrabold text-6xl border-4 my-4 border-red-500 rounded-lg animate-pulse p-4 bg-red-800 shadowidthlg'>
                        Address
                    </div>

                    {["name", "phone", "email"].map((field) => (
                        <div key={field} className='flex justify-center items-baseline gap-7'>
                            <div>{field.charAt(0).toUpperCase() + field.slice(1)}</div>
                            <input 
                                className='border-2 border-b-fuchsia-300 px-2 rounded-lg py-1'
                                type="text"
                                name={field}
                                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <div className='flex gap-4'>
                        <div>Address</div>
                        <textarea 
                            className='border-2 border-b-fuchsia-300 px-2 rounded-lg py-1 height-40 width-65 p-2' 
                            name='address' 
                            placeholder='Your current address' 
                            value={formData.address} 
                            onChange={handleChange} 
                        />
                    </div>

                    <button 
                        className='border-2 border-b-indigo-500 p-4 rounded-lg hover:font-bold mb-4 hover:border-amber-200 cursor-pointer' 
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>

                {/* Payment Section */}
                <div className='border-2 rounded-lg border-b-fuchsia-300 my-4 flex flex-col gap-4 justify-center items-center width-1/2'>
                    <div className='font-extrabold text-6xl border-4 my-4 border-green-500 rounded-lg animate-pulse p-4 bg-green-800 shadowidthlg'>
                        Payment
                    </div>

                    <button className='border-2 border-b-fuchsia-300 p-4 rounded-lg hover:border-4 hover:border-amber-400 hover:font-bold shadowidthyellowidth500 shadowidth2xl mt-20 cursor-pointer'>
                        Pay
                    </button>
                </div>
            </div>
        </>
    );
};

export default Page;