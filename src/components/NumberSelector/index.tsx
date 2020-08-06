import React, { useContext} from "react";
import { AppContext } from "../../PizzaProvider";
import { IContextProps } from "../../types";

interface INumberSelectorProps {
    label: string
}

const NumberSelector =(props:INumberSelectorProps): JSX.Element => {
    const {data, setData}:IContextProps = useContext<IContextProps>(AppContext);
    return (
    <div className="numberSelector">
        <input type='number' placeholder={props.label} onChange={event=> setData({...data, [props.label]: parseInt(event.target.value)})} value={(data[props.label]!==0)?data[props.label]:undefined}>
        </input>
    </div>
    );
}

export default NumberSelector;