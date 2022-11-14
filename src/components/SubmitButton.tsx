import styled from 'styled-components';
import Button from "../features/Button";
import Help from "../features/FormLine/Help";
import FormLine from '../features/FormLine/FormLine';
import { timeOfLastChanges } from '../helper/validators';


const ButtonContainer = styled.div`
    grid-column: 2/4;
    display: flex;
    align-items: center;
`;

const SubmitButton: React.FC = () => {
    const helpText: string = `последние изменения ${timeOfLastChanges().day} в ${timeOfLastChanges().time}`
    return (
        <FormLine>
            <div/>
            <ButtonContainer>
                <Button type='submit' text='Изменить' />
                <Help helpText={helpText}/>
            </ButtonContainer>
        </FormLine>
    )
}

export default SubmitButton;