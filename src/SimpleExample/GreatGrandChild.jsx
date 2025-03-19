import React, { useContext } from 'react'
import { ParentContext } from './ParentContext'

const GreatGrandChild = () => {

    const [ data, handleButtonClick, setState ] = useContext(ParentContext);

    const handleButtonClick2 = () => {
        setState('Hi Grandpa! I clicked a button');
    }

  return (
    <>
    <h1 className="font-semibold text-lg">Great GrandChild</h1>
    <p>{data}</p>
    <div className='flex gap-2'>
    <button onClick={handleButtonClick} className='bg-violet-600 text-white px-4 py-2 rounded-sm mt-4'>Click me</button>
    <button onClick={handleButtonClick2} className='bg-violet-600 text-white px-4 py-2 rounded-sm mt-4'>Send to Parent</button>
    </div>
   </>
  )
}

export default GreatGrandChild