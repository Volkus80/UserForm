import styled from 'styled-components';
import arrow from '../../images/arrow.png';
import { PropsWithChildren } from 'react';
import { AppContext } from '../../components/App/App';
import { useContext } from 'react';

const StyledSelect = styled.select`
    margin-left: 1rem;
    border-color: rgba(153, 153, 153, 1);
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: calc(100% - 10px);
    background-size: 10px auto;
    appearance: none;
    width: 90%;
    padding: .5rem;
`;



const Select: React.FC<PropsWithChildren> = ({children}) => {
    const {select, setSelect} = useContext(AppContext);
    return (
        <StyledSelect name='city' value={select} onChange = {(e) => setSelect(e.target.value)}>
            {children}          
        </StyledSelect>
    )
}

export {Select};