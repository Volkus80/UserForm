import { useContext } from "react";
import { AppContext } from "./App/App";
import Help from "../features/FormLine/Help";
import Input from "../features/FormLine/Input";
import Label from "../features/FormLine/Label";
import { ErrorMassage } from "../features/FormLine/ErrMessage";
import {validPassword} from '../helper/validators';
import FormLine from "../features/FormLine/FormLine";

const PasswordLine: React.FC = () => {
    const {password, passErr, setPassword, setPassErr} = useContext(AppContext);

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const checkPassword = () => validPassword(password) ? setPassErr(false) : setPassErr(true);    


    return (
        <>
            <FormLine margin='20px 0 5px 0'>
                <Label labelText="Пароль" />
                <Input
                    err={passErr}
                    name='password'
                    type='password'
                    value={password}
                    onChange={changePassword}
                    onBlur={checkPassword} />
                <Help helpText ='Ваш новый пароль должен содержать не менее 5 символов.'/>
            </FormLine>
            <FormLine margin='0'>
                <div />
                <div>
                    <ErrorMassage err={passErr} errText={password.trim().length === 0 ? 'Укажите пароль' :'Используйте не менее 5 символов'}/>
                </div>
                <div/>
            </FormLine>
        </>
    )
}

export default PasswordLine;