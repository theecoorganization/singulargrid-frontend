
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Fragment } from "react";

const ListBar = () => {
    const router = useRouter();
    const menuItem = ['New project', 'Project List', 'Logout']



    return (
        <Fragment>
         <div className="px-12 py-8 border-2 border-black border-solid rounded">
                <ul>
                  {menuItem.map((item) => (
                    <li className="mt-2">
                       <Link href="/explore">
                           {item}
                       </Link>
                   </li>
                  ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default ListBar;