import React, { useContext } from 'react';
import { AppContext } from '../../PizzaProvider';
import { IContextProps } from '../../types';
import './index.css';
import pizza from '../../images/pizza.png';

export enum pizzasSizes {
    S = 6, 
    M = 8, 
    L = 10
}

const SizeSelector = (): JSX.Element => {
    const {data, setData} = useContext<IContextProps>(AppContext);
    console.log(data, setData);
    const handleClick = (key: any): void => {
        console.log(pizzasSizes[key]);
    }

    return (
        <div className='sizeSelector'>
            <div className='pizza'>
                <img className={'img-'+pizzasSizes[data.pizzaSize]} src={pizza} alt='pizza-size'/>
                
            </div>
            <>
                <h4 className='portions'>{data.pizzaSize} portions</h4>
                <div className='buttons'>
                    
                    {Object.values(pizzasSizes)
                    .filter( (key: any):any => typeof key === 'string')
                    .map( (key: any): any=> <button key={key} type="button" onClick={() => setData({...data, pizzaSize: parseInt(pizzasSizes[key])})}>{key}</button>)
                    }
                </div>
            </>
        </div>
    );
};

export default SizeSelector;