import type { NextPage } from 'next'
import ListBar from "@/components/ListBar/ListBar";
import { useForm } from 'react-hook-form';
import React from "react";
import ProjectInfo from '@/components/ProjectInfo/ProjectInfo';



const ViewProject: NextPage = () => {
    const project = [{}]

    return (
        <div className="container lg">
            <div className="flex">
                <div className="w-1/4 m-12">
                    <ListBar />
                </div>
                <div className="w-2/4">
                    <ProjectInfo name="" type="" manager="" description="" />
                        </div>
                    </div>
                </div>
    )
}

export default ViewProject;
