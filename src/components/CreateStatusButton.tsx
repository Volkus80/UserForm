import StatusButton from "../features/StatusButton";

interface Props {
    setActiveBar: React.Dispatch<React.SetStateAction<boolean>>;
    activeBar: boolean;
}

const CreateStatusButton: React.FC<Props> = ({setActiveBar, activeBar}) => {
    
    const editStatus = () => {
        setActiveBar(!activeBar);
    }
    
    return <StatusButton editStatus={editStatus} doIt='Сменить статус'/>
}

export default CreateStatusButton;