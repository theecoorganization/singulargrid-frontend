
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { FunctionComponent } from "react";

interface ProjectDetails {
    name: string;
    description: string;
}

const ProjectInfo:FunctionComponent<ProjectDetails> = () => {
    const router = useRouter();

    return (
        <Fragment>
         <div className="">
               <h6 className="text-md text-bold">Noonu Hiyaa Project</h6>
               <h6 className="mt-2 text-xs text-orange-400">Housing Project</h6>
               <h6 className="mt-2 text-xs text-zinc-400">Atoll Council</h6>
               <p className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                   type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                   in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                   recently with desktop publishing</p>
            </div>
        </Fragment>
    )
}

export default ProjectInfo;