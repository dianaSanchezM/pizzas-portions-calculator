import React, { useState } from 'react';
import { IPizzaState, IContextProps} from './types';



const defaultState: IContextProps = {
    data: {pizzaSize: 6,
    portions: 0,
    people: 0},
      setData: (data: IPizzaState) => {}
}

export const AppContext= React.createContext<IContextProps>(defaultState);

export default function PizzaProvider({ children }: any) {
    const [data, setData] = useState(defaultState.data);
  
    return (
      <AppContext.Provider value={{ data, setData }}>
        {children}
      </AppContext.Provider>
    );
  }
