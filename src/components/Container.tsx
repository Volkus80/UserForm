import styled from 'styled-components';
import { validPassword, validMail } from '../helper/validators';
import { useContext } from 'react';
import { AppContext } from './App/App';


const StyledContainer = styled.form`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 3fr 4fr; 
`;

interface ContainerProps {  
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps>= ({children}) => {
    const prop = useContext(AppContext);


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validPassword(prop.password)) {prop.setPassErr(true);}
        if (prop.password !== prop.checkPass) {prop.setCheckPassErr(true);}
        if (!validMail(prop.mail)) {prop.setMailErr(true);} 
        if (validPassword(prop.password) && prop.password === prop.checkPass && validMail(prop.mail)) {
            const datas: FormData = new FormData(e.currentTarget);
            datas.set('status', prop.status);
            datas.set('time', new Date().toLocaleString());
            console.log(Array.from(datas));
        } 
    }
    return (
        <StyledContainer onSubmit={onSubmit}>
            {children}
        </StyledContainer>
    )
}

export default Container;