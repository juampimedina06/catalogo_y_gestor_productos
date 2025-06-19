import { useState } from "react";

export const useForm = (initState) => {
    const [ formulario, setFormulario ] = useState(initState)

        const handleChange = ({ target }) => {
            const {name, value} = target;
    
            setFormulario({
                ...formulario,
                [ name ]: value
            })
        }

        return{
            handleChange,
            ...formulario,
            setFormulario
        }
}
