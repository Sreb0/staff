import { useRef } from "react";
import { useValidator } from "../hooks/useValidator";



export const Input = ({ icon, placeholder, style, name, value, getUserInput }) => {

    const { checkInput } = useValidator();
    return (
        <div className="login__field">
            <div className="login__icon">{icon}</div>
            <input
                type="text"
                name={name}
                className="login__input"
                placeholder={placeholder}
                style={{ width: style, color: checkInput(name, value) ? 'black' : 'red' }}
                value={value}
                onChange={(event) => getUserInput(event)}
            />


        </div>
    )
}


