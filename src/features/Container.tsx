import styled from 'styled-components';
import { PropsWithChildren } from 'react';

const StyledContainer = styled.div`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 3fr 4fr;
    gap: 30px 30px;
    
`;

// interface ContainerProps {
//     children: any;
// }

const Container: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;