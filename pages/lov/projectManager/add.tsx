import CategoriesTable from "@/components/CategoriesTable/CategoriesTable";
import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjectManagers } from 'store/Lov/ProjectManager/action';
import instance from "../../../api/request";



const AddProjectManager = ({ projectManagers, getProjectManagers}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(()=> {
        getProjectManagers();
    },[])

    const deleteItem = async (data) => {
        await instance.delete(`projectManager/${data._id}`);
        getProjectManagers();
    }

    const addItem = async (data) => {
        await instance.post('projectManager/add', data);
        getProjectManagers();
    };



  
    return (
        <div className="w-full">
            <div className='mt-12 flex justify-center'>
                <h6 className="block uppercase tracking-wide text-gray-700 text-xs font-bold">Project Managers</h6>
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

           {projectManagers.length > 0 && <CategoriesTable categoryItem={projectManagers} deleteItem={deleteItem} />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    projectManagers : state.projectManagers,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getProjectManagers: bindActionCreators(getProjectManagers, dispatch),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddProjectManager)

