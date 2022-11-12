import Help from "../features/FormLine/Help";
import Input from "../features/FormLine/Input";
import Label from "../features/FormLine/Label";
import { ErrorMassage } from "../features/FormLine/ErrMessage";
import {validPassword} from '../helper/validators';

interface Pass {
    password: string;
    passErr: boolean;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setPassErr: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordLine: React.FC<Pass> = ({password, passErr, setPassword, setPassErr}) => {

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const checkPassword = () => validPassword(password) ? setPassErr(false) : setPassErr(true);    


    return (
        <>
            <Label labelText="Пароль" />
            <Input type='password' value={password} onChange={changePassword} onBlur={checkPassword} />
            <Help helpText ='Ваш новый пароль должен содержать не менее 5 символов.'/>
            <div />
            <div>
                <ErrorMassage err={passErr} errText={password.trim().length === 0 ? 'Укажите пароль' :'Используйте не менее 5 символов'}/>
            </div>
            <div/>
        </>
    )
}

export default PasswordLine;