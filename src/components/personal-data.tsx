export function PersonalData() {
    return (
        <div className="form">
            <form action="">
                <div className="name-last">
                    <div>
                        <label htmlFor="">Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Primer apellido: </label>
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="">Fecha de cumpleaños: </label>
                    <input type="date" name="birthday" id="" required />
                    <label htmlFor="">Edad: 0 años</label>
                </div>
                <div>
                    <label htmlFor="">Género:</label>
                    <input type="radio" name="Gender" id="male" value="male" />
                    <label htmlFor="male">Hombre</label>
                    <input
                        type="radio"
                        name="Gender"
                        id="female"
                        value="female"
                        required
                    />
                    <label htmlFor="female">Mujer</label>
                    <input
                        type="radio"
                        name="Gender"
                        id="other"
                        value="other"
                        required
                    />
                    <label htmlFor="other">Otro</label>
                    <input
                        type="radio"
                        name="Gender"
                        id="secret"
                        value="secret"
                        required
                    />
                    <label htmlFor="secret">Prefiero no mencionarlo</label>
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
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
                    />
                    <input type="checkbox" name="isOk" id="isOk" />
                </div>
            </form>
        </div>
    );
}
