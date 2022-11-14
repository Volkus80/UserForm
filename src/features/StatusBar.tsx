import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '../components/App/App';

const Container = styled.div`
    grid-column: 2/4;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    width: 90%; 
    padding: .5rem;
    outline: none;
    border: 2px solid rgba(153, 153, 153, 1);
`;


const Bar = styled.div`
    width: 70%;
    height: 60px;
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

const StatusBar: React.FC = () => {
    const {status, activeBar, setActiveBar, setStatus, ref} = useContext(AppContext);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value);
    const onBlur = () => setActiveBar(false);
    const barContent = activeBar ? (
        <StyledInput 
            name='status'
            type='text'
            value={status}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
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