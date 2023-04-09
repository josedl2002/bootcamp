import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Post from '@/Components/Post'


export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Inmuebles Vzla</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Has iniciado sesión con exito!</div>
                    </div>
                    <div className='mt-6 bg-gray-400 rounded-lg divide-y-4 shadow-lg '>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
