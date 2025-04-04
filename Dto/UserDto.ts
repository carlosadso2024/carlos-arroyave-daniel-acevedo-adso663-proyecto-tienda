class User {
    
    private _nombre: string;
    private _correo: string;
    private _contraseña: string;
    private _direccion: string;
    private _telefono: string

    constructor(
        nombre: string, correo: string,
        contraseña: string, direccion: string,
        telefono: string
    ) {
        this._nombre = nombre;
        this._correo = correo;
        this._contraseña = contraseña;
        this._direccion = direccion;
        this._telefono = telefono
    }

    // Getters
    get nombre(): string {
        return this._nombre;
    }

    get correo(): string {
        return this._correo;
    }

    get contraseña(): string {
        return this._contraseña;
    }

    get direccion(): string {
        return this._direccion;
    }

    get telefono(): string {
        return this._telefono;
    }

    // Setters
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set correo(correo: string) {
        this._correo = correo;
    }

    set contraseña(contraseña: string) {
        this._contraseña = contraseña;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    set telefono(telefono: string) {
        this._telefono = telefono;
    }
}

export default User;