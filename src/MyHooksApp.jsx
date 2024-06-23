import {Counter2App} from "./Counter2App.jsx";
import {MyForm} from "./MyForm.jsx";
import {MultipleCustomHook} from "./MultipleCustomHook.jsx";

export const MyHooksApp = () => {
    return (
        <>
            <h1>My Hooks App</h1>
            <Counter2App />
            <hr />
            <MyForm />
            <hr />
            <MultipleCustomHook />

        </>
    )
}