import React from 'react'

const PuzzleGrids = ({ numofGrids, a2 }) => {
// console.log({expert:a2})

// const imgBox = document.querySelector('.dragStart');

const onDragStart =()=>{


}
// console.log("@jawad ~ file: PuzzleGrids.jsx ~ line 7 ~ imgBox", imgBox)

// const whiteBoxes = document.getElementsByClassName('dragStart');
// console.log("@jawad ~ file: PuzzleGrids.jsx ~ line 9 ~ whiteBoxes", whiteBoxes)
// whiteBoxes.addEventListener('dragstart', () => {
//          console.log('DragStart has been triggered');
//   //       // e.target.className += ' hold';
//   //       // setTimeout(() => {
//   //       //     e.target.className = 'hide';
//   //       // }, 0);
    
//      });  

// useEffect(() => {
  //   whiteBoxes.addEventListener('dragstart', () => {
  //       console.log('DragStart has been triggered');
  //       // e.target.className += ' hold';
  //       // setTimeout(() => {
  //       //     e.target.className = 'hide';
  //       // }, 0);
    
  //   });  
  //   whiteBoxes.addEventListener('dragend', () => {
  //       console.log('DragEnd has been triggered');
  //       // e.target.className = 'imgBox';
  //   });
  // })
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () =>
  //     document.removeEventListener("mousedown", handleClickOutside);
  // });
// const whiteBoxes = document.getElementsByClassName('whiteBox');

// Event listeners for draggable element imgBox

const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div className='flex flex-col items-center justify-center mt-4 w-full h-full' >
      <div className='text-6xl font-extrabold text-center py-2 rounded-lg w-1/12 bg-green-600 text-white '>
        {numofGrids * numofGrids}
      </div>

      <div className='mt-6 flex  gap-x-2  flex-wrap justify-center w-96' 
      style={{height:"50vh"}} 
      key="grid-id">

      {a2?.map((item, index) => 
                <button key={index} draggable="true" 
                
                  onDragStart={onDragStart}
                  onDrop={e => handleDrop(e)}
                  onDragOver={e => handleDragOver(e)}
                  onDragEnter={e => handleDragEnter(e)}
                  onDragLeave={e => handleDragLeave(e)}


                  className='dragStart text-2xl transform hover:bg-purple-900 transition duration-500 hover:scale-105 font-bold h-24 w-24 bg-purple-600 border-2 border-purple-900 my-1  rounded-lg text-white'>{item}
                </button>
            )}
      </div>
    </div>
  )
}

export default PuzzleGrids