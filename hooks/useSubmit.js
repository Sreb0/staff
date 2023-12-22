import { useState } from "react";
import { useValidator } from "./useValidator";





export const useSubmit = (initial = {}) => {

    const [data, setData] = useState(initial);
    const { checkInput } = useValidator();



    const getUserInput = ({ target }) => {
        const { name, value } = target;
        setData(prev => {
            return {
                ...prev,
                [name]: value

            }
        })

    }



    const onSubmitData = (event) => {
        event.preventDefault();
        const notEmpty = Object.keys(data).filter(item => data[item] === '').length === 0;
        const notError = Object.keys(data).filter(item => !checkInput(item, data[item])).length === 0;
        if(notEmpty && notError) alert(JSON.stringify(data));
        setData(
            {
                store: '',
                fullname: '',
                date: '',
                total: '',
                typo: ''

            })
    }

    return {
        data,
        getUserInput,
        onSubmitData
    }
}


