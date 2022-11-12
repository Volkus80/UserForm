import styled from 'styled-components';
// import StatusButton from './StatusButton';
import CreateStatusButton from '../components/CreateStatusButton';

const Container = styled.div`
    grid-column: 1/3;
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    margin-bottom: 20px;
`;

const Greeting = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    
`;

const UserName = styled(Greeting)`
    color: rgba(0, 0, 0, 1);
`;

const Title: React.FC = () => {
    return(
        <>
        <Container>
            <Greeting>Здравствуйте,</Greeting>
            <UserName> Человек</UserName>
        </Container>
        <CreateStatusButton />
        </>
    )
}

export default Title;