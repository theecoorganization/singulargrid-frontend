
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Fragment } from "react";

const ListBar = () => {
    const router = useRouter();
    const menuItem = [ {
        name: 'New project',
        route: '/explore'
    },
    {
        name: 'View Project',
        route: '/admin/viewProject'
    },
    {
        name: 'Logout',
        route: '/'
    }]



    return (
        <Fragment>
         <div className="px-12 py-8 border-2 border-black border-solid rounded">
                <ul>
                  {menuItem.map((item) => (
                    <li className="mt-2">
                       <Link href={item.route}>
                           {item.name}
                       </Link>
                   </li>
                  ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default ListBar;