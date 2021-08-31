/* This example requires Tailwind CSS v2.0+ */


import React, {useState} from 'react'
import Overview from './data/overview';
import Banner from './banner';
  
  export default function Main({data, hardware}) {
    const [isActive, setisActive] = useState('home');

    return (
      <>
      
      <Banner hardware={hardware}/>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Welcome to Project C</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>


          <nav className="position: absolute relative z-0 rounded-lg shadow flex divide-x divide-gray-200 pt-5" aria-label="Tabs">
          {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
          <div onClick={() => setisActive('home')} className={`${isActive === 'home' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`} aria-current="page">
            <span>Overview</span>
            <span aria-hidden="true" className={`${isActive === 'home' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
          </div>
          <div onClick={() => setisActive('GPU')} className={`${isActive === 'GPU' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`} >
            <span>Mother</span>
            <span aria-hidden="true" className={`${isActive === 'GPU' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
          </div>
          <div onClick={() => setisActive('history')} className={`${isActive === 'history' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}>
            <span>Children</span>
            <span aria-hidden="true" className={`${isActive === 'history' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
          </div>
            <div onClick={() => setisActive('payouts')} className={`${isActive === 'payouts' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'} group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}>
              <span>Payouts</span>
              <span aria-hidden="true" className={`${isActive === 'payouts' ? 'bg-indigo-500' : 'text-gray-500 hover:text-gray-700'} absolute inset-x-0 bottom-0 h-0.5`}></span>
            </div>
        </nav>
        <div className="flex flex-col items-center justify-center py-2">


         <Overview data={data} hardware={hardware}/>
        </div>
        </div>
      </div>
      </>
    )
  }

