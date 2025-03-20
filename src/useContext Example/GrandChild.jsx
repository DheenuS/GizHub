import React, { useContext } from 'react'
import { ParentContext } from './ParentContext'

const GrandChild = () => {
    const [data] = useContext(ParentContext);
  return (
   <>
    <h1 className="font-semibold text-lg">GrandChild</h1>
    <p>{data}</p>
   </>
  )
}

export default GrandChild