class Cart {
    private _usuario_id: number;
    private _producto_id: number;
    private _cantidad: number;

    constructor(usuario_id: number, producto_id: number, cantidad: number) {
        this._usuario_id = usuario_id;
        this._producto_id = producto_id;
        this._cantidad = cantidad;
    }

    // Getters
    get usuario_id(): number {
        return this._usuario_id;
    }

    get producto_id(): number {
        return this._producto_id;
    }

    get cantidad(): number {
        return this._cantidad;
    }

    // Setters
    set usuario_id(usuario_id: number) {
        this._usuario_id = usuario_id;
    }

    set producto_id(producto_id: number) {
        this._producto_id = producto_id;
    }

    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }
}

export default Cart;