import { PersonalData } from "../components/personal-data";

export function FormPage() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>Por favor, rellene los siguientes datos:</h3>
                </header>
            </div>
            <PersonalData></PersonalData>
        </>
    );
}
