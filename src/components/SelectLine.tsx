import { Select } from "../features/FormLine/Select";
import Label from "../features/FormLine/Label";
import {data, index} from '../data/Data';



const SelectLine: React.FC = () => {
    return (
        <>
            <Label labelText='Ваш город'/>
            <Select>
                {data.map((elem, i) => {
                    if(Number(elem.population) >= 50_000) {
                        return <option key={elem.city}>{elem.city}</option>
                        }
                    } 
                )}
            </Select>
            <div/>
        </>
    )

}

export default SelectLine;