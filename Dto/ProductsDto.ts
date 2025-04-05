class Products {

    private _nombre: string;
    private _descripcion: string;
    private _precio: number;
    private _stock: number;
    private _categoria: string
  
    constructor(
      nombre: string,
      descripcion: string,
      precio: number,
      stock: number,
      categoria: string
    ) {
     
      this._nombre = nombre;
      this._descripcion = descripcion;
      this._precio = precio;
      this._stock = stock;
      this._categoria = categoria;
    }
  
   
    get nombre(): string {
      return this._nombre;
    }
  
    get descripcion(): string {
      return this._descripcion;
    }
  
    get precio(): number {
      return this._precio;
    }
  
    get stock(): number {
      return this._stock;
    }
  
    get categoria(): string {
      return this._categoria;
    }
  
    // Setters
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    set descripcion(desc: string) {
      this._descripcion = desc;
    }
  
    set precio(precio: number) {
      this._precio = precio;
    }
  
    set stock(stock: number) {
      this._stock = stock;
    }
  
    set categoria(categoria: string) {
      this._categoria = categoria;
    }
  }
  
  export default Products;
  