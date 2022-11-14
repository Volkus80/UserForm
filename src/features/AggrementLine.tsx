import styled from 'styled-components';
import Label from './FormLine/Label';
import FormLine from './FormLine/FormLine';


const CheckBoxContainer = styled.div`
    grid-column: 2/4;
`;

const Text = styled.span`
    padding-left: 10px;
`;



const AggrementLine: React.FC = () => {
    return (
        <FormLine>
            <Label labelText='Я согласен' />
            <CheckBoxContainer>
                <label >
                    <input type='checkbox' name='agreement'/>
                    <Text>принимать актуальную информацию на емейл</Text>
                </label>
                
            </CheckBoxContainer>

        </FormLine>
    )
}

export default AggrementLine;