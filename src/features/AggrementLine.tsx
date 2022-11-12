import styled from 'styled-components';
import Label from './FormLine/Label';


const CheckBoxContainer = styled.div`
    grid-column: 2/4;
`;

const Text = styled.span`
    padding-left: 10px;
`;



const AggrementLine: React.FC = () => {
    return (
        <>
            <Label labelText='Я согласен' />
            <CheckBoxContainer>
                <label >
                    <input type='checkbox' name='agreement'/>
                    <Text>принимать актуальную информацию на емейл</Text>
                </label>
                
            </CheckBoxContainer>

        </>
    )
}

export default AggrementLine;