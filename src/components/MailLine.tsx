import second from '../features/FormLine/Label';
import Help from '../features/FormLine/Help';
import Input from '../features/FormLine/Input';
import Label from '../features/FormLine/Label';
import { ErrorMassage } from '../features/FormLine/ErrMessage';

const MailLine: React.FC = ({mail, mailErr}) => {
    const errText = mail.trim().length === 0 ? 'Укажите E-mail' : 'Неверный E-mail'
    return (
        <>
        <Label labelText='Электронная почта' />
        <Input 
            type='mail' 
            name='email' 
        />
        <Help helpText='Можно изменить адрес, указанный при регистрации. '/>
        <div/>
        <div>
            <ErrorMassage err={mailErr} errText={errText}/>
        </div>
        <div/>
        </>
    )
}

export default MailLine;