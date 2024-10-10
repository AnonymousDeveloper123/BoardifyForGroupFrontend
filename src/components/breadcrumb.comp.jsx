/* eslint-disable react/prop-types */
// Breadcrumb.js
import { Link } from 'react-router-dom';
import { GreaterThan } from '../assets/svgs';

const Breadcrumb = ({ paths }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol key={paths} className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {
                    paths.map((path, index) => (
                        <>
                            <li key={index} className="inline-flex items-center">
                                <Link href="#" className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    {path.name}
                                </Link>
                            </li>
                            {index !== paths.length - 1 && <GreaterThan key={index} />}
                        </>
                    ))
                }
            </ol>
        </nav>
    );
};

export default Breadcrumb;
