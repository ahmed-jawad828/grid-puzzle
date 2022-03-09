import { useEffect, useState } from 'react';
import './App.css';
import PuzzleGrids from './components/PuzzleGrids';
import Confetti from 'react-dom-confetti';

const App = () => {

  const [numofGrids, setGrids] = useState(0);
  const [isPuzzleCompleted, setisPuzzleCompleted] = useState(false);

  var a1 = [];
  for (var i = 0; i < (numofGrids * numofGrids); i++) { a1.push(i + 1); }
  var a2 = [];
  while (a1.length) {
    var pos = Math.random() * a1.length;
    var element = a1.splice(pos, 1)[0];
    a2.push(element);
  }
  
  const confettiConfig = {
    angle: 0,
    spread: 360,
    startVelocity: 40,
    elementCount: 500,
    dragFriction: 0.11,
    duration: 5000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };
  const handleSquaredGridLayout =(numofGrids) =>{
    document.documentElement.style.setProperty('--num-of-grids',numofGrids)
  }
  useEffect(() => {
    const grids =getComputedStyle(document.documentElement).getPropertyValue('--num-of-grids')          
    console.log("@jawad ~ file: App.js ~ line 35 ~ grids", grids)
    handleSquaredGridLayout(numofGrids)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[numofGrids])

  return (
    <div className="css-selector h-full min-h-screen w-full min-w-max">
      <div className='flex justify-center flex-col items-center '>
        <h1 className=' fontstyle text-4xl font-bold font-sans text-black text-center pt-10'>
          Grid Puzzle Task
        </h1>
        <div className='w-2/6 py-10'>
          <input
            type="number"
            name="number"
            id="mumber"
            className="shadow-sm  block w-full sm:text-lg outline-none border-gray-300 rounded-md h-10 px-5"
            placeholder="Enter a Number from 1 - 10"
            // min="1" max="10"
            onChange={(e) =>
              {
                setisPuzzleCompleted(false)
                setGrids(e.target.value)
              }}
          />
        </div>
      </div>
      <div className={numofGrids > 0 ? "h-full" : "hidden"}>
        <PuzzleGrids numofGrids={numofGrids} a2={a2} setGrids={setGrids} setisPuzzleCompleted={setisPuzzleCompleted} />
      </div>
      <div>
        <Confetti active={isPuzzleCompleted} config={confettiConfig} />
      </div>
      <div className={isPuzzleCompleted ?"flex justify-center  ":"hidden"}>
      <div className=" text-center flex justify-center flex-col items-center">
        <p className='pb-3 glow '>
          Congratulations you have completed the Task
        </p>
        <img className="rounded-lg mt-10" src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" alt="gify"/>
      </div>

      </div>
    </div>
  );
}
export default App;
