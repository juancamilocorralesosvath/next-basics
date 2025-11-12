import React from 'react'
import { IoBrowsersOutline, IoCalculatorOutline, IoTrendingUpOutline } from 'react-icons/io5'

const menuItems = [
    {
    path: "/dashboard",
    icon: <IoTrendingUpOutline />,
    title: "Dashboard",
    subtitle: "students dashboard"
},
{
      path: "/dashboard/counter",
    icon: <IoCalculatorOutline />,
    title: "counter",
    subtitle: "counter calculator"  
}
]

export const Sidebar = () => {
  return (
    <div
    style={{width:'480px'}}
    className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll'
    >

        <div className='mx-4 px-6'>
            <h1 className='text-lg md:text-2xl font-bold text-white'>Dash <span className='text-blue-500'>students</span></h1>
            <p className='text-slate-500 text-sm'>manage your student application</p>
        </div>

        <div className='px-6 py-10 '>
            <p className='text-slate-500'>welcome, Gus</p>
            <a href="" className='inline-flex space-x-2 items-center'>
                <span className='rounded-full w-8 h-8 bg-amber-100'>

                </span>

                <span className='text-sm md:text-base font-bold'>
                    El profe gus
                </span>

            </a>
        </div>
        <div className='w-full px-6 '>
           {
            menuItems.map(item => )
           }
        </div>

    </div>
  )
}
