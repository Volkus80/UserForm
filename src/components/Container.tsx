import styled from 'styled-components';
import { useEffect } from 'react';
import { validPassword, validMail } from '../helper/validators';


const StyledContainer = styled.form`
    margin: 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 3fr 4fr;    
`;

interface ContainerProps {
    status: string;
    mail: string;
    checkPass: string;
    password: string;
    mailErr: boolean;
    checkPassErr: boolean;
    passErr: boolean;
    setPassErr: React.Dispatch<React.SetStateAction<boolean>>;
    setCheckPassErr: React.Dispatch<React.SetStateAction<boolean>>;
    setMailErr: React.Dispatch<React.SetStateAction<boolean>>;    
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps>= (props) => {


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validPassword(props.password)) {props.setPassErr(true);}
        if (props.password !== props.checkPass) {props.setCheckPassErr(true);}
        if (!validMail(props.mail)) {props.setMailErr(true);} 
        if (validPassword(props.password) && props.password === props.checkPass && validMail(props.mail)) {
            const datas: FormData = new FormData(e.currentTarget);
            datas.append('status', props.status);
            datas.append('time', new Date().toLocaleString());
            console.log(Array.from(datas));
        } 
    }
    return (
        <StyledContainer onSubmit={onSubmit}>
            {props.children}
        </StyledContainer>
    )
}

export default Container;