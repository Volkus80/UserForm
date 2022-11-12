import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 3fr 4fr;
    gap: 30px 30px;
    
`;

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps>= ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;