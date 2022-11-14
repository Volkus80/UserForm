import Help from '../features/FormLine/Help';
import Input from '../features/FormLine/Input';
import Label from '../features/FormLine/Label';
import { ErrorMassage } from '../features/FormLine/ErrMessage';
import {validMail} from '../helper/validators';
import FormLine from '../features/FormLine/FormLine'

interface Mail {
    mail: string;
    mailErr: boolean;
    setMail: React.Dispatch<React.SetStateAction<string>>;
    setMailErr: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailLine: React.FC<Mail> = ({mail, mailErr, setMail, setMailErr}) => {
    const errText = mail.trim().length === 0 ? 'Укажите E-mail' : 'Неверный E-mail';
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value);
    const onBlur = () => validMail(mail) ? setMailErr(false) : setMailErr(true);

    return (
        <>
            <FormLine margin='20px 0 5px 0'>
                <Label labelText='Электронная почта'/>
                <Input
                    err={mailErr}
                    name='mail'
                    type='email'
                    value={mail}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <Help helpText='Можно изменить адрес, указанный при регистрации. '/>
            </FormLine>
            <FormLine margin='0'>
                <div/>
                <div>
                    <ErrorMassage err={mailErr} errText={errText}/>
                </div>
                <div/>
            </FormLine>
        </>
    )
}

export default MailLine;