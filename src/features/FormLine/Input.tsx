import styled, {css} from 'styled-components';


const StyledInput = styled.input`
    width: 90%;  
`;

interface Props{
    name: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

const Input: React.FC<Props> = ({name, value, type, onChange, onBlur}) => {
    return(
        <StyledInput 
            name={name}
            type={type} 
            value={value} 
            onChange={onChange} 
            onBlur={onBlur} />
    )
}

export default Input;
