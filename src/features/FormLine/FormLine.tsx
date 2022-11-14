import styled from 'styled-components';
// import { PropsWithChildren } from 'react';

const Container = styled.div<Line>`
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 2fr 3fr 4fr;
    margin:${props => props.margin || '20px 0px'};
    align-items: center;
    min-height: 25px;
`;

interface Line {
    children: React.ReactNode;
    margin?: string;
}

const FormLine: React.FC<Line> = ({children, margin}) => {
    return (
        <Container margin={margin}>
            {children}
        </Container>
    )
}

export default FormLine;