import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import GetFeaturedFlags from './context-data';


export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const [featureFlagsState, setFeatureFlagsState] = useState({});

  useEffect(() => {
    (async () => {
      const res = await GetFeaturedFlags();
      setFeatureFlagsState(res); 
      console.log(featureFlagsState);
    })();
  }, [featureFlagsState])

  return (
    <AppContext.Provider value={featureFlagsState} >{children}</AppContext.Provider>
  )
}

export default AppContextProvider;