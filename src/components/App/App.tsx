import {createContext, useState, useRef} from 'react';
import {data, defaultCity} from '../../data/Data';
import Container from "../Container";
import Title from "../../features/Title";
import StatusBar from "../../features/StatusBar";
import SelectLine from "../SelectLine";
import PasswordLine from '../PasswordLine';
import CheckPasswordLine from '../CheckPasswordLine';
import MailLine from '../MailLine';
import AggrementLine from '../../features/AggrementLine';
import SubmitButton from '../SubmitButton';



type SetStr = (s: string ) => void;
type SetBoolean = (s: boolean) => void;


interface AppContextValues {
    select: string; 
    setSelect: SetStr;
    setPassword: SetStr;
    setCheckPass: SetStr;
    setMail: SetStr;
    setPassErr: SetBoolean;
    setCheckPassErr: SetBoolean;
    setMailErr: SetBoolean;
}

const defaultValue = {
    select: defaultCity,
    setSelect: (str: string) => console.log(str),
    setPassword: (str: string) => console.log(str),
    setCheckPass: (str: string) => console.log(str),
    setMail: (str: string) => console.log(str),
    setPassErr: (b: boolean) => console.log(b),
    setCheckPassErr: (b: boolean) => console.log(b),
    setMailErr: (b: boolean) => console.log(b),
};
export const AppContext = createContext<AppContextValues>(defaultValue);

const App: React.FC = () => {
    const [activeBar, setActiveBar] = useState(false);
    const [status, setStatus] = useState('Прежде чем действовать, надо понять');
    const [select, setSelect] = useState(defaultCity);
    const [password, setPassword] = useState('');
    const [checkPass, setCheckPass] = useState('');
    const [mail, setMail] = useState('');
    const [passErr, setPassErr] = useState(false);
    const [checkPassErr, setCheckPassErr] = useState(false);
    const [mailErr, setMailErr] = useState(false);
    const value: AppContextValues = {
        select,
        setSelect,
        setPassword,
        setCheckPass,
        setMail,
        setPassErr,
        setCheckPassErr,
        setMailErr
    };
    return (
        <AppContext.Provider value={value}>
            <Container 
                status={status}
                mail={mail}
                password={password}
                checkPass={checkPass}
                passErr={passErr} 
                checkPassErr={checkPassErr} 
                mailErr={mailErr}
                setPassErr={setPassErr}
                setCheckPassErr={setCheckPassErr}
                setMailErr={setMailErr}
            >
                <Title 
                    setActiveBar={setActiveBar}
                    activeBar={activeBar}
                />
                <StatusBar 
                    status={status}
                    active={activeBar} 
                    setActiveBar={setActiveBar}
                    setStatus={setStatus}
                />
                <SelectLine />
                <PasswordLine 
                    password={password} 
                    passErr={passErr}
                    setPassword={setPassword}
                    setPassErr={setPassErr}
                />                
                <CheckPasswordLine 
                    password={password}
                    checkPass={checkPass} 
                    checkPassErr={checkPassErr}
                    setCheckPass={setCheckPass}
                    setCheckPassErr={setCheckPassErr}
                />  
                <MailLine 
                    mail={mail}
                    mailErr={mailErr}
                    setMail={setMail}
                    setMailErr={setMailErr}             
                />      
                <AggrementLine />  
                <SubmitButton />      
            
            </Container>
        </AppContext.Provider>
    )
}

export default App;