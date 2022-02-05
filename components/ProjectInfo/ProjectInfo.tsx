
import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import { FunctionComponent } from "react";
import Image from "next/image";
import Noonu from "../../public/assets/eco.png";

interface ProjectDetails {
    name: string;
    description: string;
}

const ProjectInfo:FunctionComponent<ProjectDetails> = () => {
    const router = useRouter();

    return (
        <Fragment>
         <div className="">
               <h6 className="font-14">Noonu Hiyaa Project</h6>
               <h6 className="mt-2 font-10">Housing Project</h6>
               <h6 className="mt-2 font-10">Atoll Council</h6>
               <p className="mt-5 font-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                   the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                   type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                   in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                   recently with desktop publishing</p>
                
                <div id="flex flex-row images">
                    <Image  src={Noonu}  alt="sample" />
                    <Image src={Noonu} className="p-5 rounded-xl" alt="nike" />
                </div>
            </div>
        </Fragment>
    )
}

export default ProjectInfo;