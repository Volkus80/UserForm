import {createContext, useState, useRef, useEffect} from 'react';
import {defaultCity} from '../../data/Data';
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
    activeBar: boolean, 
    setActiveBar: SetBoolean,
    status: string, 
    setStatus: SetStr,
    select: string, 
    setSelect: SetStr,
    password: string, 
    setPassword: SetStr,
    checkPass: string, 
    setCheckPass: SetStr,
    mail: string, 
    setMail: SetStr,
    passErr: boolean, 
    setPassErr: SetBoolean,
    checkPassErr: boolean, 
    setCheckPassErr: SetBoolean,
    mailErr: boolean, 
    setMailErr: SetBoolean,
    ref: any
}

const defaultValue = {
    activeBar: false, 
    setActiveBar: (b: boolean) => console.log(b),
    status: 'status', 
    setStatus: (s: string) => console.log(s),
    select: 'city', 
    setSelect: (s: string) => console.log(s),
    password: '', 
    setPassword: (s: string) => console.log(s),
    checkPass: '', 
    setCheckPass: (s: string) => console.log(s),
    mail: '', 
    setMail: (s: string) => console.log(s),
    passErr: false, 
    setPassErr: (b: boolean) => console.log(b),
    checkPassErr: false, 
    setCheckPassErr: (b: boolean) => console.log(b),
    mailErr: false, 
    setMailErr: (b: boolean) => console.log(b),
    ref: undefined
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
    const ref = useRef<HTMLInputElement>(null);
    const value: AppContextValues = {
        activeBar, 
        setActiveBar,
        status, 
        setStatus,
        select, 
        setSelect,
        password, 
        setPassword,
        checkPass, 
        setCheckPass,
        mail, 
        setMail,
        passErr, 
        setPassErr,
        checkPassErr, 
        setCheckPassErr,
        mailErr, 
        setMailErr,
        ref: ref        
    };
    useEffect(() => {
        if(ref.current) {
            ref.current.focus();
        }
    },[activeBar])

    return (
        <AppContext.Provider value={value}>
            <Container>
                <Title />
                <StatusBar />
                <SelectLine />
                <PasswordLine />                
                <CheckPasswordLine />  
                <MailLine />      
                <AggrementLine />  
                <SubmitButton />      
            
            </Container>
        </AppContext.Provider>
    )
}

export default App;