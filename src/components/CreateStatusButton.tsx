import StatusButton from "../features/StatusButton";

const CreateStatusButton: React.FC = () => {
    
    function editStatus(str: string) : void {
        console.log(str);
    }
    
    return <StatusButton editStatus={editStatus} doIt='Сменить статус'/>
}

export default CreateStatusButton;