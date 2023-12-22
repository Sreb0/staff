



export const useValidator = () => {
    
    const checkInput = (name, value) => {
        if (value === '') return true;

        switch (name) {
            case "store":
                return /^[0-9]{4}$/.test(value);
            case "fullname":
                return /^([\u0400-\u04FF]+) ([\u0400-\u04FF]+)$/.test(value);
            case "date":
                return /^([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/([0-9]{4})$/.test(value);
            case "total":
                return /^\d+(\.)?\d*$/.test(value);
            case "typo":
                return /^[AVD]$/.test(value);


        }
    }

    return {
        checkInput
    }

}


