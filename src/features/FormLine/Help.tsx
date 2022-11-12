import styled from 'styled-components';

const Text = styled.p`
    font-size: 12px;
    color: rgba(153, 153, 153, 1);

`;

interface Props {
    helpText: string;
}

const Help: React.FC<Props> = ({helpText}) => {
    return <Text>{helpText}</Text>
}

export default Help;