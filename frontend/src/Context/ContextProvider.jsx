import React, { useState } from 'react'
import Context from './Context';

const ContextProvider = ({children}) => {
    const [name, setName] = useState(null);
  return (
    <Context.Provider value={{name, setName}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider