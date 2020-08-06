
export interface IPizzaState {
    [key: string] :number,
    pizzaSize : number, 
    portions : number 
    people : number 
}

export interface IContextProps {
    data: IPizzaState;
    setData: (data: IPizzaState) => void;
  }