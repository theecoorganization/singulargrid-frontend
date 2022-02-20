import CategoriesTable from '@/components/CategoriesTable/CategoriesTable';
import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjectTypes } from 'store/Lov/ProjectType/action';
import instance from "../../../api/request";



const ProjectTypes  = ({projectTypes, getProjectTypes}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(()=> {
        getProjectTypes();
    },[])



    const deleteItem = async (data) => {
        await instance.delete(`projectType/${data._id}`);
        getProjectTypes();
    }

    const addItem = async (data) => {
        await instance.post('projectType/add', data);
        getProjectTypes();
    };

   


    return (
        <div className="w-full">
            <div className='mt-12 flex justify-center'>
                <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Project Types</h6>
            </div>

            <div className='flex justify-center'>
                <div className="w-2/4 p-16 mt-12 border-2 border-grey-300 border-solid rounded">
                    <form onSubmit={handleSubmit(addItem)}>
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

            {projectTypes.length > 0  && <CategoriesTable categoryItem={projectTypes} deleteItem={deleteItem} />}

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

