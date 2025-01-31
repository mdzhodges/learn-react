/**
 * When the Form is rendered, it appears to be frozen.
 * When a user enters stuff into the <input> tags or
 * clicks on the reset button nothing happens.
 * Identify and fix the error.
 */
import {useState} from "react";


export default function Form() {

    const [firstName, setName] = useState("");
    const [lastName, setLast] = useState('');

    function handleFirstNameChange(e: { target: { value: string; }; }) {
        setName(e.target.value);
    }

    function handleLastNameChange(e: { target: { value: string; }; }) {
        setLast(e.target.value);
    }

    function handleReset() {
        setName('');
        setLast('')
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}
