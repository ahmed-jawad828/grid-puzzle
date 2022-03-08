import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import "./style.css"

const PuzzleGrids = ({ numofGrids, a2,setGrids ,setisPuzzleCompleted}) => {

          const [grids, setNumofGrids] = useState(a2);    
          const [isGridSorted, setisGridSorted] = useState(false);  
                     
          useEffect(() => {
            setNumofGrids(a2)
          },[a2])
          
          const handleDragStart =(e, index)=>{
            e.dataTransfer.setData("dragContent", index);
          }

          const handleDrop = (e,index) => {
            e.preventDefault();
            let fromBox = JSON.parse(e.dataTransfer.getData("dragContent"));
            swapBoxes(fromBox, index);
            return false;
          };

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
          const swapBoxes = (fromBox, toBox) => {
            const newItems = grids.slice();
            const temp = grids[fromBox];
            newItems[fromBox] = grids[toBox];
            newItems[toBox] = temp;
            setNumofGrids(newItems);  
            setisGridSorted(newItems.every((v,i,a) => !i || a[i-1] <= v))
          };
          useEffect(() => {
            if(isGridSorted){
                Swal.fire(
                'Great job!',
                'Welcome to the Team!',
                'success'
              )
              setGrids(0)
              setisPuzzleCompleted(true)            
            }            
          // eslint-disable-next-line react-hooks/exhaustive-deps
          },[isGridSorted])
          return (
            <div className='flex flex-col items-center justify-center mt-4 w-full h-full' >
              <div className='text-6xl font-extrabold text-center py-2 px-6 rounded-lg  bg-green-500 text-white '>
                {numofGrids * numofGrids}
                <span className="text-lg font-normal pl-2">Boxes</span>
              </div>
              <div className='mt-6 flex  gap-x-2  flex-wrap justify-center w-96 overflow-y-auto no-scrollbar'
              key="grid-id">
              {grids?.map((item, index) => 
                        <button key={index} draggable="true"   
                          onDragStart={(e)=>handleDragStart(e,index)}
                          onDrop={(e) => handleDrop(e,index)}
                          onDragOver={(e) => handleDragOver(e)}
                          onDragEnter={(e) => handleDragEnter(e)}
                          onDragLeave={(e) => handleDragLeave(e)}
                          className='dragStart text-2xl transform hover:bg-purple-900 transition duration-500 hover:scale-110 font-bold h-24 w-24 bg-purple-300 border-2 border-purple-900 my-1  rounded-lg text-black hover:text-white'>{item}
                        </button>
                    )}
              </div>
            </div>
          )
}

export default PuzzleGrids