import { Select } from "../features/FormLine/Select";
import Label from "../features/FormLine/Label";
import {data} from '../data/Data';
import FormLine from "../features/FormLine/FormLine";



const SelectLine: React.FC = () => {
    return (
        <FormLine>
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
        </FormLine>
    )

}

export default SelectLine;