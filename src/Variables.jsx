// import React from 'react'
// import Style.css

function Variables() {
  return (
   <>
    <div className="bg-black w-full h-[100vh]">
      <div className="flex justify-center items-center pt-10 space-x-2">
      <div className="">
        <button className="bg-blue-500 rounded-xl text-white font-mono px-2 py-1 active:bg-blue-900  focus:bg-slate-900 focus:border-white border-[1px]  ">YourBTn</button>
      </div>
      <div className="bg-white rounded-xl text-black font-mono px-2 py-1  focus:bg-gray-700 focus:border-white focus:border-[1px]  ">
        <button>HarshBTn</button>
      </div>
      <div className="bg-purple-500 rounded-xl text-white font-mono px-2 py-1 active:bg-purple-900 active:border-white active:border-[0.5px] ">
        <button>AsyabBTn</button>
      </div>
      <div className="bg-orange-500 rounded-xl text-white font-mono px-2 py-1 active:bg-orange-900 focus:bg-slate-900 focus:border-white focus:border-[1px] ">
        <button>ShardaBTn</button>
      </div>

      </div>
    </div>
   </>
  )
}

export default Variables

