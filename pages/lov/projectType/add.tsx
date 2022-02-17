import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import instance from "../../../api/request";
import Modal from "@/components/Modal/Modal";
import ListBar from '@/components/ListBar/ListBar';

import { getProjectTypes } from 'store/Lov/ProjectType/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesTable from '@/components/CategoriesTable/CategoriesTable';

const ProjectTypes  = ({projectTypes, getProjectTypes}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showModal, setShowModal] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        await instance.post('projectType/add', data);
        setShowModal(true);
    };

    const router = useRouter();

    const onAddSuccess = () => {
        setShowModal(false);
        router.push('/project/view');
    }

    useEffect(()=> {
        getProjectTypes();
    },[])


    return (
        <div className="w-full">
            <div className='mt-12 flex justify-center'>
                <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Project Types</h6>
            </div>

            <div className='flex justify-center'>
                <div className="w-2/4 p-16 mt-12 border-2 border-grey-300 border-solid rounded">
                    <div className="flex flex-col mt-20 ml-40  absolute z-50">
                        {showModal ? <Modal>
                            <div className="flex flex-col justify-between">
                                <p> Successfully added Project type. </p>
                                <button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' onClick={onAddSuccess} value="submit">Done </button>
                            </div>
                        </Modal> : ''}
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex">
                            <div className="w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Name:
                                </label>
                                <input {...register("name", { required: true })} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                <p className="text-red-400">{errors.name?.type === 'required' && "Name is required"}</p><br />
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mx-3' value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <CategoriesTable categoryItem={projectTypes} />

        </div>
    )
}

const mapStateToProps = (state) => ({
    projectTypes : state.projectTypes,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getProjectTypes: bindActionCreators(getProjectTypes, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectTypes)

