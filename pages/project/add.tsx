import ListBar from "@/components/ListBar/ListBar";
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import instance from "../../api/request";
import Modal from "@/components/Modal/Modal"

const AddProject: NextPage = (props) => {
    const [managers, setManagers] = useState([]);
    const [projectTypes, setProjectTypes] = useState([]);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [place, setPlace] = useState({});
    const [showModal, setShowModal] = React.useState(false);

    const onSubmit = async (data) => {
        data.location = place;
        await instance.post('project/add', data);
        setShowModal(true);
    };

    const router = useRouter()

    useEffect(() => {
        const { lat, lng } = router.query;
        if (!lat && !lng) {
             router.push('/admin/explore');
             return;
        }
        setPlace({ lat, lng });
        getProjectTypes();
    }, []);

    const getProjectTypes = async () => { 
        const types =  await instance.get('/projectType/');
        const managers = await instance.get('/projectManager/');
        if(types.data) {
            setProjectTypes(types.data);
        }
        if(managers.data) {
            setManagers(managers.data);
        }
    };

    const onAddSuccess = () => {
        setShowModal(false);
        router.push('/project/view');
    }


    return (
        <div className="container lg">
            <div className="flex">
                <div className="w-1/4 m-12">
                    <ListBar />
                </div>
                <div className="w-2/4 p-16 mt-12 border-2 border-grey-300 border-solid rounded">
                <div className="flex flex-col mt-20 ml-40  absolute z-50 border">
                {showModal ? <Modal>
                <div className="flex flex-col justify-between">
                    <p> Successfully added project </p>
                    <button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' onClick={onAddSuccess} value="submit">Done </button>
                </div>
            </Modal> : ''}
                </div>
               
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Name:
                                </label>
                                <input {...register("name", { required: true })} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                <p className="text-red-400">{errors.name?.type === 'required' && "Name is required"}</p><br/>
                            </div>
                        </div>
                        <div className="w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Manager
                            </label>
                            <div className="relative">
                                <select {...register("projectManager", { required: true })} className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value="0">select option</option>
                                {managers.map((item) => (
                                        <option value={item.name}>{item.name}</option>
                                    ))}
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
                                <select {...register("projectType",{ required: true })} className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option value="0">select option</option>
                                    {projectTypes.map((item) => (
                                        <option value={item.name}>{item.name}</option>
                                    ))}
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
                                <textarea {...register("description",{ required: true })} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" />
                                <p className="text-red-400">{errors.description?.type === 'required' && "Description is required"} </p><br />
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' value="submit">Cancel</button>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProject;
