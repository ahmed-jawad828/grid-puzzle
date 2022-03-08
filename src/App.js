import {  useState } from 'react';
import './App.css';
import PuzzleGrids from './components/PuzzleGrids';
// import puzzleGrids from './components/PuzzleGrids';

const App = () => {

  const [numofGrids, setNumofGrids] = useState(0);
  // const [grids, setNumofGrids] = useState(0);
  // console.log("@jawad ~ file: App.js ~ line 7 ~ numofGrids", numofGrids)

  var a1 = [];
  for (var i = 0; i < (numofGrids * numofGrids); i++) { a1.push(i + 1); }
  var a2 = [];
  while (a1.length) {
    var pos = Math.random() * a1.length;
    var element = a1.splice(pos, 1)[0];
    a2.push(element);
  }
  console.log({ a2 })
  // useEffect(() => {

  // }, [numofGrids])
  // const UserGreeting = ({ numofGrids }) => {
  //   return <h1 className='text-4xl'>{numofGrids * numofGrids}</h1>;
  // }


  // if (numofGrids > 0) {
  //   return <UserGreeting numofGrids={numofGrids} />;
  // }
  return (
    <div className="css-selector h-full min-h-screen">
      <div className='flex justify-center flex-col items-center '>
        <h1 className='text-4xl font-bold font-sans text-black text-center pt-10'>
          Grid Puzzle Task
        </h1>
        <div className='w-2/6 py-10'>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="number"
            name="number"
            id="mumber"
            className="shadow-sm  block w-full sm:text-lg outline-none border-gray-300 rounded-md h-10 px-5"
            placeholder="Enter a Number from 1 - 10"
            onChange={(e) =>
              setNumofGrids(e.target.value)
            }
          />
        </div>
        {/* <div className="">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div> */}
      </div>
      <div className={numofGrids>0 ? "":"hidden"}>
            <PuzzleGrids numofGrids={numofGrids} a2={a2}/>
      </div>
    </div>
  );
}

export default App;
