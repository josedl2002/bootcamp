import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {

    return (
        <>
            <Head title="Inmuebles" />
            <div className=" bg-emerald-300 relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {props.auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Publicaciones
                        </Link>
                        
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Iniciar Sesión
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Registrase
                            </Link>
                        </>
                    )}
                </div>
                    <div className=''>
                        <div className='p-5 flex space-x2 '>
                            <h2 className='text-white '>Bienvenido a Bienes raices Vzla donde puedes conseguir los mejores precios en inmuebles</h2>
                        </div>
                    </div>
            </div>

           
        </>
    );
}
