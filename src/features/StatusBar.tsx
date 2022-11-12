import styled from 'styled-components';

const Container = styled.div`
    grid-column: 1/4;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Bar = styled.div`
    width: 50%;
    align-self: center;
    padding: 1rem;
    border-radius: 5px;
    background:#E5E5E5;
    position: relative;
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
    return (
        <Container>
            <Bar>
                <Text>Прежде чем действовать, надо понять</Text>
            </Bar>
        </Container>
    )
}

export default StatusBar;