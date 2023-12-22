import { IoPersonSharp, IoStorefrontSharp, IoCalendarSharp } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { Input, Button } from '../components';
import { useSubmit } from "../hooks/useSubmit";
import '../src/index.css';



const ICONS = [<IoStorefrontSharp />, <IoPersonSharp />, <IoCalendarSharp />, <GrMoney />, <AiOutlineTwitter />];
const STYLE = ["70%", "100%", "70%", "40%", "20%"];
const PLACEHOLDER = ["Филиал", "Име Фамилия", "dd/mm/yyyy", "Сума", "A"];
const NAMES = ["store", "fullname", "date", "total", "typo"];

export const Form = () => {

    const { data, getUserInput, onSubmitData } = useSubmit({
        store: '',
        fullname: '',
        date: '',
        total: '',
        typo: ''

    });

    


    return (
        <form className="login" onSubmit={onSubmitData}>
            {ICONS.map((item, ind) => {
                return (
                    <Input
                        key={ind}
                        name={NAMES[ind]}
                        icon={ICONS[ind]}
                        placeholder={PLACEHOLDER[ind]}
                        style={STYLE[ind]}
                        value={data[NAMES[ind]]}
                        getUserInput={getUserInput}
                    />
                )
            })}
            <Button />
        </form>

    )
}

