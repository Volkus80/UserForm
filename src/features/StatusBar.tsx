import styled from 'styled-components';
import Input from './FormLine/Input';

const Container = styled.div`
    grid-column: 1/4;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    width: 50%;
    align-self: center;
    height: 70px;
    border-radius: 5px;
    background:#E5E5E5;
    padding-left: 10px;
    position: relative;
    display: flex;
    align-items: center;
    color: rgba(64, 64, 64, 1);
    &::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        transform: rotate(45deg);
        left: 1rem;
        top: -0.5rem;
        background: #E5E5E5;
    }
`;
const Text = styled.p`
    color: rgba(64, 64, 64, 1);
    font-size: 14px;
    font-weight: 400;
`;

interface Props {
    status: string;
    active: boolean; 
    setActiveBar: React.Dispatch<React.SetStateAction<boolean>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const StatusBar: React.FC<Props> = ({status, active, setActiveBar, setStatus}) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value);
    const onBlur = () => setActiveBar(false);
    const barContent = active ? (
        <Input 
            name='status'
            type='text'
            err={false}
            value={status}
            onChange={onChange}
            onBlur={onBlur}
        />

    ) : <Text>{status}</Text>

    return (
        <Container>
            <Bar>
                {barContent}
            </Bar>
        </Container>
    )
}

export default StatusBar;