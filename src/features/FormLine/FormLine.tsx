import styled from 'styled-components';
// import { PropsWithChildren } from 'react';

const Container = styled.div`
    grid-column: 1/4;
    display: grid;
    grid-template-columns: subgrid;
`;

interface FormLine {
    children: React.ReactNode;
}

const FormLine: React.FC<FormLine> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default FormLine;