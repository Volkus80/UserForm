import {createContext, useState} from 'react';
import {data, index} from '../../data/Data';
import Container from "../../features/Container";
import Title from "../../features/Title";
import StatusBar from "../../features/StatusBar";
import Help from "../../features/FormLine/Help";
import Label from "../../features/FormLine/Label";
import SelectLine from "../SelectLine";
import Input from "../../features/FormLine/Input";
import PasswordLine from '../PasswordLine';
import CheckPasswordLine from '../CheckPasswordLine';


type SetStr = (s: string) => void;
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
    select: 'Красноярск',
    setSelect: (str: string) => console.log(str),
    setPassword: (str: string) => console.log(str),
    setCheckPass: (str: string) => console.log(str),
    setMail: (str: string) => console.log(str),
    setPassErr: (b: boolean) => console.log(b),
    setCheckPassErr: (b: boolean) => console.log(b),
    setMailErr: (b: boolean) => console.log(b),
}
export const AppContext = createContext<AppContextValues>(defaultValue);

const App: React.FC = () => {
    const [status, setStatus] = useState('');
    const [select, setSelect] = useState(data[index].city);
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
            <Container>
                <Title />
                <StatusBar />
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
                {/* <Label labelText='Пароль еще раз'/>
                <Input />
                <Help helpText ='Повторите пароль, пожалуйста, это обезопасит вас с нами
            на случай ошибки.'/>
                <Label labelText='Электронная почта'/>
                <Input />
                <Help helpText ='Можно изменить адрес, указанный при регистрации. '/> */}
            
            </Container>
        </AppContext.Provider>
    )
}

export default App;