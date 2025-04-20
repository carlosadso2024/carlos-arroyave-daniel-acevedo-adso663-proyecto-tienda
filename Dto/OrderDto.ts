class Pedido {
    private _id_pedidos?: number; // opcional
    private _usuario_id: number;
    private _total: number;
    private _estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado';
    private _fecha_pedido: Date;
  
    constructor(
      usuario_id: number,
      total: number,
      estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado',
      fecha_pedido: Date
    ) {
      this._usuario_id = usuario_id;
      this._total = total;
      this._estado = estado;
      this._fecha_pedido = fecha_pedido;
    }
  
    // Getters
    get id_pedidos(): number | undefined {
      return this._id_pedidos;
    }
  
    get usuario_id(): number {
      return this._usuario_id;
    }
  
    get total(): number {
      return this._total;
    }
  
    get estado(): 'pendiente' | 'pagado' | 'enviado' | 'entregado' {
      return this._estado;
    }
  
    get fecha_pedido(): Date {
      return this._fecha_pedido;
    }
  
    // Setters
    set id_pedidos(id_pedidos: number | undefined) {
      this._id_pedidos = id_pedidos;
    }
  
    set usuario_id(usuario_id: number) {
      this._usuario_id = usuario_id;
    }
  
    set total(total: number) {
      this._total = total;
    }
  
    set estado(estado: 'pendiente' | 'pagado' | 'enviado' | 'entregado') {
      this._estado = estado;
    }
  
    set fecha_pedido(fecha_pedido: Date) {
      this._fecha_pedido = fecha_pedido;
    }
  }
  
  export default Pedido;
  