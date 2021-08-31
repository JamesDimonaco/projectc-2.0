import axios from 'axios'


import { ArrowSmDownIcon, ArrowSmUpIcon, FireIcon } from '@heroicons/react/solid'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Overview({data, hardware}) {

    console.log(hardware.online);

    

    return (
        <>
        
         <div className="pt-10">
      <h3 className="text-lg leading-6 font-medium text-gray-900">online GPUs</h3>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {hardware.online.map((item) => (
          <div key={item.accepted} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-1xl font-semibold text-indigo-600">
                {item.speed}
                    <span className="text-sm font-medium text-red-400">MH/s</span>
                <span className="ml-2 text-sm font-medium text-gray-500">temp {item.temp}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.temp <= 50 ? 'good' : item.temp <= 55 ? 
                <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/> :
                item.temp <= 60 ?
                <>
                <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                </>
                    : item.temp <= 65 ?
                    <>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    </>
                    : item.temp <= 70 ?
                    <>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    <FireIcon className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"/>
                    </> :
                    'hot'
}               
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
        
        </>
    )
}

