import { useState } from "react";
import Child from "./Child";
import GrandChild from "./GrandChild";
import GreatGrandChild from "./GreatGrandChild";
import { ParentContext } from "./ParentContext";    // Import context from other file to fast refresh the context


const Parent = () => {
  
    const [state, setState] = useState('Parent waiting for greatgrandchild to click the button...');
    console.log(state);
    
  
    const data = "Message from parent to grandchild";
  
  const handleButtonClick = () => {
    console.log('Button Clicked by great grandchild');
  }

  return (
    <div className="bg-gray-500 mx-10 p-10">
      <div className=" bg-violet-600 m-1 p-10">
        <h1 className="font-semibold text-lg">Parent</h1>
        <p>{state}</p>
        
        <ParentContext.Provider value={[data, handleButtonClick, setState]}>
          <div className=" bg-violet-500 m-1 p-10">
            <Child />
            <div className=" bg-violet-400 m-1 p-10">
              <GrandChild />
            <div className=" bg-violet-300 m-1 p-10">
              <GreatGrandChild />
            </div>
            </div>
          </div>
        </ParentContext.Provider>

      </div>
    </div>
  );
};

export default Parent;
