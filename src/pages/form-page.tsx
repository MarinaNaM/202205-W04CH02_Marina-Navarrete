import { useState } from "react";
import { PersonalData } from "../components/personal-data";
import { UserModel } from "../models/user-model";

export function FormPage() {
    const [users, setUsers] = useState(new UserModel("", "", "", "", ""));
    const [state, setState] = useState(1);

    const addUsers = (user: UserModel) => {
        setUsers({ ...users, ...user });
    };

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>Por favor, rellene los siguientes datos:</h3>
                </header>
            </div>
            <PersonalData addUsers={addUsers} state={state}></PersonalData>
            <button onClick={() => setState(state - 1)}>Previous</button>
            <button onClick={() => setState(state + 1)}>Next</button>
        </>
    );
}
