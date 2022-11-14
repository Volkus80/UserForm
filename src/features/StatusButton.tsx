import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;
const Button = styled.button`
    background: transparent;
    font-size: 12px;
    color: #0C77BB;
    text-decoration: #0C77BB dashed 2px;
    border: none;
    border-bottom: #0C77BB dashed 2px;
    outline: none;
    cursor: pointer;
    margin:  0 calc(25%) 20px 0;
    align-self: flex-end;
`;

interface ButtonProps {
    doIt: string;
    editStatus: (e:any) => any;
}

const StatusButton: React.FC<ButtonProps> = ({doIt, editStatus}) => {
    return (
        <Container>
            <Button onClick={editStatus}>{doIt}</Button>
        </Container>
    )   
}

export default StatusButton;
