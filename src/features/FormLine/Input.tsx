import styled from 'styled-components';
interface Props{
    err: boolean;
    name: string;
    value: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

interface Style {
    err: boolean;
}


const StyledInput = styled.input<Style>`
    margin-left: 1rem;
    width: 90%; 
    padding: .5rem;
    outline: none;
    border: 2px solid;
    border-color: ${({err}) => err ? 'red' : 'rgba(153, 153, 153, 1)'}; 
`;


const Input: React.FC<Props> = ({err, name, value, type, onChange, onBlur}) => {
    return(
        <StyledInput 
            err={err}
            name={name}
            type={type} 
            value={value} 
            onChange={onChange} 
            onBlur={onBlur} 
        />
    )
};

export default Input;
