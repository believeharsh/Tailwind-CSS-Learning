// import React from 'react'

//Statically positioning elements
// Use static to position an element according to the normal flow of the document.

// Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.

function Position() {
  return (
    <>
 {/* <div className="static bg-red-200 border-blue-100 border">
    <p>Static parent</p>
    <div className="absolute bottom-0 left-0 ...">
      <p>Absolute child</p>
    </div>
  </div> */}

  <div className="relative">
  <p>Relative parent</p>
  <div className="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>


  
    </>
   
  )
}

export default Position
