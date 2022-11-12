import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    background-color: rgba(113, 200, 56, 1);
    box-shadow: 0 2px  1px grey;
    font-size: 1.2rem;
    padding: 10px 15px;
    margin-right: 20px;
    color: white;
    cursor: pointer;
    transition: ease .3s;
    &:hover {
        transform: scale(1.05);
    };
    &:active {
        transform: translateY(2px);
    }
`;

interface Style {
    type: 'submit' | 'reset' | 'button' | undefined;
    text: string;
}

const Button: React.FC<Style> = ({type, text}) => {
    return (
        <StyledButton type={type}>{text}</StyledButton>
    )
}

export default Button;