import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Button = styled.button`
    background: transparent;
    font-size: 12px;
    color: #0C77BB;
    border: none;
    border-bottom: #0C77BB dashed 2px;
    outline: none;
    cursor: pointer;
    margin:  0 calc(57%) 20px 100px;
    align-self: flex-end;
`;

interface ButtonProps {
    doIt: string;
    editStatus: (str: string) => any;
}

const StatusButton: React.FC<ButtonProps> = ({doIt, editStatus}) => {
    return (
        <Container>
            <Button onClick={() => editStatus('ok')}>{doIt}</Button>
        </Container>
    )   
}

export default StatusButton;
