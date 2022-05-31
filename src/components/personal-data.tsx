import { ChangeEvent, FormEvent, useState } from "react";
import { UserModel } from "../models/user-model";

export function PersonalData({ addUsers }: { addUsers: Function }) {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        birthday: "",
        gender: "",
        email: "",
        isOk: true,
    });

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        console.log("Guardando", formData);
        addUsers(
            new UserModel(
                formData.name,
                formData.lastName,
                formData.birthday,
                formData.gender,
                formData.email
            )
        );
    }

    function handleChange(ev: ChangeEvent) {
        const eventTarget = ev.target as HTMLFormElement;
        const value =
            eventTarget.type === "checkbox"
                ? eventTarget.checked
                : eventTarget.value;
        setFormData({ ...formData, [eventTarget.name]: value });
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="name-last">
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Primer apellido: </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="birthday">Fecha de nacimiento: </label>
                    <input
                        type="date"
                        name="birthday"
                        id=""
                        onChange={handleChange}
                        required
                    />
                    <p>Edad: 0 años</p>
                </div>
                <div>
                    <label htmlFor="gender">Género:</label>
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="male">Hombre</label>
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="female">Mujer</label>
                    <input
                        type="radio"
                        name="gender"
                        id="other"
                        value="other"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="other">Otro</label>
                    <input
                        type="radio"
                        name="gender"
                        id="secret"
                        value="secret"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="secret">Prefiero no mencionarlo</label>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="isOk">
                        ¿Desea recibir información de nuestra newsletter?
                    </label>
                    <input
                        type="checkbox"
                        name="isOk"
                        id="isOk"
                        checked={true}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Siguiente</button>
            </form>
        </div>
    );
}
