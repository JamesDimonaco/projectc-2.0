/* This example requires Tailwind CSS v2.0+ */

export default function Banner({hardware}) {
  return (
      <>
{hardware.offline.map((item) => (
<div key={item.last_seen} className="relative bg-indigo-600">
<div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
  <div className="pr-16 sm:text-center sm:px-16">
    <p className="font-medium text-white">
      <span className="">Miner offline!  </span>
      <span className="hidden md:inline underline ">{item.name}</span>
      <span className="block sm:ml-2 sm:inline-block">
        last active {new Date(item.last_seen * 1000).toLocaleString()}
      </span>
    </p>
  </div>
  <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
    <button
      type="button"
      className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
    >
    </button>
  </div>
</div>
</div>

))}
 
    </>

  )
}
