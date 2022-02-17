import React, { Fragment, FunctionComponent } from "react";
import Image from "next/image";
import Delete from "../../public/icons/delete.svg"

interface CategoryItem {
    id: string,
    name: string
}

interface Category {
    categoryItem: Array<CategoryItem>
}

const CategoriesTable: FunctionComponent<Category> = ({ categoryItem }) => {

    return (
        <div className="flex  justify-center">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Name
                                    </th>

                                    <th scope="col" className="relative py-3 px-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                    <th scope="col" className="relative py-3 px-6">
                                        <span className="sr-only">Icon</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    {categoryItem.map((item, index) => (
                                        <tr className="bg-white border-b ">
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap ">
                                                {item.name}
                                            </td>

                                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
                                                    <Image src={Delete} width="24" height="24" />
                                                </a>
                                            </td>
                                            </tr>
                                    ))}

                               

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
};


export default CategoriesTable;