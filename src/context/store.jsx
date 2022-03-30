import React, { createContext, useState, useEffect } from 'react';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export const StoreContext = createContext( null );


export function StoreProvider({ children }) {


    // store global state
    const [ state, setState ] = useState( null );
    

    // store global object
    const storeValue = {

        state, setState,    // state propeties
    };


    // store init
    useEffect(() => {

    }, []);

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <>
    <StoreContext.Provider value={ storeValue }>

        { children }

    </StoreContext.Provider>
    </>
)};