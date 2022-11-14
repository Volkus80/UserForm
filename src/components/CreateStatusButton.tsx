import StatusButton from "../features/StatusButton";
import {useContext} from 'react';
import {AppContext} from '../components/App/App';


const CreateStatusButton: React.FC= () => {
    const {activeBar, setActiveBar} = useContext(AppContext);
    const editStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActiveBar(!activeBar);
    }
    
    return <StatusButton editStatus={editStatus} doIt='Сменить статус'/>
}

export default CreateStatusButton;