
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Fragment, FunctionComponent } from "react";

const ListBar:FunctionComponent = () => {
    const router = useRouter();
    const menuItem = [ {
        name: 'New project',
        route: '/project/add'
    },
    {
        name: 'View Project',
        route: '/project/view'
    },
    {
        name: 'Logout',
        route: '/'
    }]

    const isActive = (router, item) => {
        return router.pathname === `${item.route}`;
      };



    return (
        <Fragment>
         <div className="p-10 border border-radius-4 w-60 border-grey-100 border-solid rounded-lg">
                <ul>
                  {menuItem.map((item) => (
                    <li className="mt-2">
                       <Link href={item.route}>
                            <p className={`cursor-pointer  ${isActive(router, item) ? 'text-black font-bold' : 'text-slate-700'}`}>{item.name}</p>
                       </Link>
                   </li>
                  ))}
                </ul>
            </div>
        </Fragment>
    )
}

export default ListBar;