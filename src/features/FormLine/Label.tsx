import styled from 'styled-components';

const Text = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
`;

interface Props {
    labelText: string;
}

const Label: React.FC<Props> = ({labelText}) => {
    return <Text>{labelText}</Text>
}

export default Label;