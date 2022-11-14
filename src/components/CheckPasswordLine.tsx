import { useContext } from "react";
import { AppContext } from "./App/App";
import Label from "../features/FormLine/Label";
import Input from "../features/FormLine/Input";
import Help from "../features/FormLine/Help";
import { ErrorMassage } from "../features/FormLine/ErrMessage";
import FormLine from "../features/FormLine/FormLine";

const CheckPasswordLine: React.FC= () => {
    const {password, checkPass, checkPassErr, setCheckPass, setCheckPassErr} = useContext(AppContext);
    const errText = checkPass.trim().length === 0 ? 'Укажите пароль' : 'Пароли не совпадают';

    const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {setCheckPass(e.target.value)};
    const onBlur = () => {
        checkPass.trim().length===0 || checkPass !== password ? setCheckPassErr(true) : setCheckPassErr(false); 
    }

    return (
        <>
            <FormLine margin='20px 0 5px 0'>
                <Label labelText='Пароль еще раз'/>
                <Input
                    err={checkPassErr}
                    name='checkPass'
                    type='password'
                    value={checkPass}
                    onChange={onChange}
                    onBlur={onBlur} />
                <Help helpText='Повторите пароль, пожалуйста, это обезопасит вас с нами
                на случай ошибки.' />
            </FormLine>
            <FormLine margin='0'>
                <div/>
                <div>
                    <ErrorMassage
                        errText={errText}
                        err={checkPassErr}
                    />
                </div>
                <div/>
            </FormLine>
                
        </>
    )
}

export default CheckPasswordLine;