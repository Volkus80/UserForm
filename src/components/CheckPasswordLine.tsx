import Label from "../features/FormLine/Label";
import Input from "../features/FormLine/Input";
import Help from "../features/FormLine/Help";
import { ErrorMassage } from "../features/FormLine/ErrMessage";

interface Props {
    password: string;
    checkPass: string;
    checkPassErr: boolean;
    setCheckPass: React.Dispatch<React.SetStateAction<string>>;
    setCheckPassErr: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckPasswordLine: React.FC<Props> = ({password, checkPass, checkPassErr, setCheckPass, setCheckPassErr}) => {
    const errText = checkPass.trim().length === 0 ? 'Укажите пароль' : 'Пароли не совпадают';

    const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {setCheckPass(e.target.value)};
    const onBlur = () => {
        checkPass.trim().length===0 || checkPass !== password ? setCheckPassErr(true) : setCheckPassErr(false); 
    }

    return (
        <>
            <Label labelText='Пароль еще раз'/> 
            <Input value={checkPass} type='password' onChange={onChange} onBlur={onBlur} />
            <Help helpText='Повторите пароль, пожалуйста, это обезопасит вас с нами
            на случай ошибки.' />
            <div/>
            <div>
                <ErrorMassage
                    errText={errText}
                    err={checkPassErr}
                />
            </div>
            <div/>
                
        </>
    )
}

export default CheckPasswordLine;