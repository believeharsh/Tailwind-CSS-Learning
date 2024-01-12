// import React from 'react'

//Statically positioning elements
// Use static to position an element according to the normal flow of the document.

// Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.

function Position() {
  return (
    <>
      {/* <div className="w-[300px] h-[300px] m-[100px] bg-gray-700"> 
  <div className="bg-green-600 w-[100px] h-[100px] relative top-8">Green </div>

  <div className="bg-blue-600  w-[100px] h-[100px] absolute ">Blue</div>

  <div className="bg-red-600  w-[100px] h-[100px] ">Red</div>
  </div>

  <div className="w-[200px] border border-red-400 h-[200px] overflow-auto ">
  <img src="https://via.placeholder.com/100" className="float-left p-2 " alt="" />
    <div className="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio error nulla omnis sed provident delectus quas blanditiis quia voluptatum officia totam ex maxime, laborum odit possimus dolores. Voluptates impedit autem explicabo. Quidem, maxime rem numquam, vel ratione optio at expedita saepe deserunt facilis error, enim placeat debitis laudantium officia est cum corrupti! Eum eos facere modi, eius odio atque deserunt. Ea maiores quo ullam magni numquam rem repellat voluptates doloremque repellendus commodi veniam expedita dolore doloribus quod deserunt consectetur saepe harum tempore, sint beatae! Expedita accusantium ratione nobis impedit amet cum modi minus enim aliquam sit, vel, possimus neque veniam quaerat, deserunt dolores unde in praesentium dignissimos earum laborum? Debitis, repellat, totam culpa quam exercitationem deserunt natus tenetur reprehenderit sapiente eum quis cupiditate neque quidem molestias sunt. Dolor pariatur exercitationem nostrum esse ut, totam ipsam molestias dolore at perspiciatis iure similique doloremque id! Explicabo, atque. Obcaecati iste in cupiditate non officia totam, inventore perspiciatis porro dolorum earum natus dolores eligendi sint, similique tempore laborum provident nobis culpa placeat fuga rerum minima laudantium facere 
    </div>
  </div> */}

      <nav className="w-[100%] h-[60px] bg-purple-800 fixed top-0 z-10"></nav>

      <main className="w-[50%] h-[250vh] border-black border-[1px] relative left-[20%] right-[30%] py-[110px] px-[50px]"></main>

      <div className="w-[100%] h-[200vh] absolute top-[0px]">
        <aside className="w-[300px] bg-blue-400 h-[80vh] sticky top-[80px]"></aside>
      </div>
      <div className="w-20 h-20 fixed right-10 bottom-10 border-black rounded-xl hover:bg-white hover:border-black border-[2px] bg-blue-900">

      </div>

      <footer className="w-[100%] h-[20px] bg-black z-10"></footer>
    </>
  );
}

export default Position;
