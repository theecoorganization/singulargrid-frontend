import type { NextPage } from 'next'
import ListBar from "@/components/ListBar/ListBar";
import { useForm } from 'react-hook-form';
import React from "react";
import ProjectInfo from '@/components/ProjectInfo/ProjectInfo';



const AddProject: NextPage = () => {
    const [managers] = ['Atoll Council', 'Kudafari Council', 'Maafaru Council', 'Manadhoo Council'];
    const [projectType] = ['Housing Development Project', 'Conservation Area', 'Tourism Development Project']
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container lg">
            <div className="flex">
                <div className="w-1/4 m-12">
                    <ListBar />
                </div>
                <div className="w-2/4 mt-12 border-2 border-red-300 border-solid rounded">
                    <ProjectInfo />
                        </div>
                    </div>
                </div>
    )
}

export default AddProject;
