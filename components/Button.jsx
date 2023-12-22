
import { RiMailSendFill } from "react-icons/ri";



export const Button = () => {
    
    return (
        <button type="submit" className="button login__submit">
            <span className="button__text">Изпрати</span>
            <RiMailSendFill className="button__icon" />
        </button>
    )
}


