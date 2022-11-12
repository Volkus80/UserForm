import styled from 'styled-components';
import { AppContext } from '../../components/App/App';


interface Style {
    err: boolean;
}
interface Props {
    errText: string;
    err: boolean;
    
}


const Text = styled.p<Style>`
    color: red;
    font-size: 12px;
    display: ${({err}) => !err ? 'none' : 'block'}
    
`;


export const ErrorMassage: React.FC<Props> = ({errText, err}) => {
    return  <Text err={err}>{errText}</Text>
}