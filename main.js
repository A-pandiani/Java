class Producto{
    constructor(marca, nombre, precio, moneda,){
        this.marca = marca;
        this.nombre = nombre;
        this.precio = precio;
        this.moneda = moneda;
        this.precioEnvio = 200;
    }

    cuantoQuedoConIva(){
      return(this.precio *1.21);
    }
    cuantoQuedaConEnvio(){
        return this.moneda+(this.cuantoQuedoConIva() + this.precioEnvio);
    }
}
const Fernet = new Producto("Branca", "Fernet", 1000, "$")
console.log(Fernet.cuantoQuedoConIva());
console.log(Fernet.cuantoQuedaConEnvio());