/**
* if we want to use the component in one area instead of their above then we do prop drilling and for this context Api use as we globalised this componenet 
* and context api is purely for react so  for other their is REDUX 
* using in react we use react-Redux 
* and its easier library available that is RTK(Redux-toolkit)
* other that can do this state management system uis zustand
 */

import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// above is part1

// every context is a provider  and for using context we have to create provider 
