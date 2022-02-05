import ListBar from "@/components/ListBar/ListBar";
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

const AddProject: NextPage = (props) => {
    const [managers] = ['Atoll Council', 'Kudafari Council', 'Maafaru Council', 'Manadhoo Council'];
    const [projectType] = ['Housing Development Project', 'Conservation Area', 'Tourism Development Project']
    const { register, handleSubmit } = useForm();
    const [place, setPlace] = useState({});
    const onSubmit = data => {
        console.log(place);
        console.log(data);
    };


    const router = useRouter()

    useEffect(() => {
        const {lat, lng} = router.query;
        setPlace({lat, lng})
    },[])
   

  

    return (
        <div className="container lg">
            <div className="flex">
                <div className="w-1/4 m-12">
                    <ListBar />
                </div>
                <div className="w-2/4 p-16 mt-12 border-2 border-grey-300 border-solid rounded">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-wrap">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                            Name:
                                        </label>
                                        <input {...register("name")} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  />
                                    </div>
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                        Manager
                                    </label>
                                    <div className="relative">
                                        <select {...register("maanger")} className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option value="volvo">Atoll Council</option>
                                            <option value="saab">Kudafari Council</option>
                                            <option value="mercedes">Maafaru Council</option>
                                            <option value="audi">Manadhoo Council</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Type
                                    </label>
                                    <div className="relative">
                                        <select {...register("projectType")} className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            <option value="volvo">Housing Development Project</option>
                                            <option value="saab">Conservation Area</option>
                                            <option value="mercedes">Tourism Development Project</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Description:
                                        </label>
                                        <textarea {...register("description")} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' value="submit">Cancel</button>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3'  value="Submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default AddProject;
