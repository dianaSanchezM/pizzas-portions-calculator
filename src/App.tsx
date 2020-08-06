import React, { useContext } from 'react';
import './App.css';
import NumberSelector from './components/NumberSelector';
import SizeSelector from './components/SizeSelector';
import { AppContext } from './PizzaProvider';

function App() {
  const {data: {pizzaSize, portions, people}} = useContext(AppContext);

  const amount:number = Math.ceil((portions*people)/pizzaSize);
  console.log(amount);
  return (
    <div className="App">
      <div className="element">
        <SizeSelector />
      </div>
      <div className="element">
        <NumberSelector label= 'people' />
        <NumberSelector label= 'portions' />
        {amount>0 && <h1 className="result" >Order {amount} pizza{(amount!==1)?'s':null}</h1>}
        
        {//<h1 className="result" >Order {//amount} pizza{(//amount!==1)?'s':null}</h1>
        }
      </div>
    </div>
  );
}

export default App;
