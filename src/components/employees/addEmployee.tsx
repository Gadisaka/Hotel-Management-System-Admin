import {useState} from "react"

interface AddEmployeeProps{
    open : Boolean,
    onClose:()=> void,
    onAddEmployee : (
        employee : {
            firstName : string
            lastName : string
            sex : string
            role : string
            birthDate : string
            phone : number
            salary : number
            image : string
            username? : string
            password? : string
        }[]
    ) => void

}

export default function AddEmployee({
    open,
    onclose,
    onAddEmployee
}){

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [sex, setSex] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [phone, setPhone] = useState<number | null>(null);
    const [salary, setSalary] = useState<number | null>(null);
    const [image, setImage] = useState<string>('');
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const clearFields
    = () => {
        setFirstName('');
        setLastName('');
        setSex('');
        setRole('');
        setBirthDate('');
        setPhone(null);
        setSalary(null);
        setImage('');
        setUsername(null);
        setPassword(null);
    }

    return(

    )

}