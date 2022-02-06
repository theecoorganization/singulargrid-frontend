
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

const ProjectInfo:FunctionComponent<ProjectDetails> = ({name, type, manager, description}) => {
    const router = useRouter();

    return (
        <Fragment>
         <div className="">
             <div className="mt-12">
             <h6 className="text-md text-bold">{name}</h6>
               <h6 className="mt-2 text-xs text-orange-400">{type}</h6>
               <h6 className="mt-2 text-xs text-zinc-400">{manager}</h6>
               <p className="mt-5 text-sm ">{description}</p>
                <div className="mt-10 flex flex-row justify-between">
                <Image className="m-5 rounded" src={Eco} width="128" height="128" />
                <Image className="m-5 rounded" src={Noonu} width="128" height="128" />
                <Image className="m-5 rounded"src={Reef} width="128" height="128" />
                <Image className="m-5 rounded" src={Palmtrees} width="128" height="128" />
                </div>
             </div>
             </div>
        </Fragment>
    )
}

export default ProjectInfo;