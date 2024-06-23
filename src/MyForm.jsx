import {useForm} from "./hooks/useForm.js";

export const MyForm = () => {

    const{email,password,onInputChange,formState,onResetForm} = useForm({
                                                                        email: '',
                                                                        password: ''
                                                                    });
        const onSubmit = (e) => {
            e.preventDefault();
            console.log({email,password});
        }

    return(
        <>
            <h1>My Form</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Escribe un algo"
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Escribe un algo"
                name='password'
                value={password}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >Reset</button>
            <button
                className="btn btn-primary mt-2"
                onClick={onSubmit}
            >Submit</button>

        </>
    )
}