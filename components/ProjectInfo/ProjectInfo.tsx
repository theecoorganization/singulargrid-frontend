
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { FunctionComponent } from "react";
import Image from "next/Image";
import Eco from "../../public/assets/eco.png";
import Noonu from "../../public/assets/noonu.jpg";
import Reef from "../../public/assets/reef.jpg";
import Palmtrees from "../../public/assets/palmtrees.jpg"

interface ProjectDetails {
    name: string;
    type: string;
    manager: string;
    description: string;
}

const ProjectInfo:FunctionComponent<ProjectDetails> = () => {
    const router = useRouter();

    return (
        <Fragment>
         <div className="">
             <div className="mt-12">
             <h6 className="text-md text-bold">Noonu Hiyaa Project</h6>
               <h6 className="mt-2 text-xs text-orange-400">Housing Project</h6>
               <h6 className="mt-2 text-xs text-zinc-400">Atoll Council</h6>
               <p className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                   type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                   in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                   recently with desktop publishing</p>
                <div className="mt-10 flex flex-row justify-between">
                <Image className="m-5 rounded" src={Eco} width="128" height="128" />
                <Image className="m-5 rounded" src={Noonu} width="128" height="128" />
                <Image className="m-5 rounded"src={Reef} width="128" height="128" />
                <Image className="m-5 rounded" src={Palmtrees} width="128" height="128" />
                </div>
               
             </div>
             <div className="mt-12">
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
            </div>
        </Fragment>
    )
}

export default ProjectInfo;