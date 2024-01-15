// import React from 'react'

//Statically positioning elements
// Use static to position an element according to the normal flow of the document.

// Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.

// Static
// This is the default value for elements. The element is positioned according to the normal flow of the document. The left, right, top, bottom and z-index properties do not affect an element with position: static.

// Relative
// Elements with position: relative remain in the normal flow of the document. But, unlike static elements, the left, right, top, bottom and z-index properties affect the position of the element. An offset, based on the values of left, right, top and bottom properties, is applied to the element relative to itself.

// Absolute
// Elements with position: absolute are positioned relative to their parent elements. In this case, the element is removed from the normal document flow. The other elements will behave as if that element is not in the document. No space is created for the element in the page layout. The values of left, top, bottom and right determine the final position of the element.

// Fixed
// Fixed position elements are similar to absolutely positioned elements. They are also removed from the normal flow of the document. But unlike absolutely positioned element, they are always positioned relative to the <html> element.

// One thing to note is that fixed elements are not affected by scrolling. They always stay in the same position on the screen.

// Sticky
// position: sticky is a mix of position: relative and position: fixed. It acts like a relatively positioned element until a certain scroll point and then it acts like a fixed element.

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
      <div className="w-20 h-20 fixed right-10 bottom-10 border-black rounded-xl hover:bg-white hover:border-black border-[2px] bg-blue-900"></div>

      <footer className="w-[100%] h-[20px] bg-black z-10"></footer>
    </>
  );
}

export default Position;
