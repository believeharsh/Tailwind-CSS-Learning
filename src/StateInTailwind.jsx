// import React from 'react'

// Pseudo-classes
// Hover, focus, and active
// Style elements on hover, focus, and active using the hover, focus, and active modifiers:



function StateInTailwind() {
  return (
    <div>


    {/* <div className="flex justify-center items-center space-x-2">
        <div className=" bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  rounded-xl py-1 px-2 border-white border-[0.5px]">First</div>
        <div className="bg-blue-600 border-white border-[0.5px] text-white font-mono rounded-xl px-2 py-1  ">Second</div>
        <div className="bg-blue-600 border-white border-[0.5px] text-white font-mono rounded-xl px-2 py-1  ">Third</div>
        <div className="bg-blue-600 border-white border-[0.5px] text-white font-mono rounded-xl px-2 py-1  ">Fourth</div>
        <div className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">saveChange</div>
    </div> */}
    <fieldset>
  <legend>Published status</legend>

  <input id="draft" className="peer/draft" type="radio" name="status" checked />
  <label htmlFor="draft" className="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" className="peer/published" type="radio" name="status" />
  <label htmlFor="published" className="peer-checked/published:text-sky-500">Published</label>

  <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
      
    </div>
  )
}

export default StateInTailwind
