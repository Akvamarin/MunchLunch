/* Aquí definimos nuestra clase coche y la enumeración de valores BUENO y MALO */

/* ENUMERACIÓN BUENO, MALO */
export enum EstadoCoche {BUENO, MALO};

/* CLASE COCHE */
export class coche {
	foto: string; /* Path de la foto*/
	marca: string; /* Marca */
	modelo: string; /* Modelo del coche */
	fecha_modelo: Date; /* Fecha de salida del modelo */
	fecha_venta: Date; /* Fecha en la que el coche se puso en venta */
	precio: number; /* Precio (sin IVA) */
	estado: EstadoCoche; /* Estado del coche: BUENO o MALO */
	
	/* Constructor que usaremos en app.component.ts */
	constructor(foto: string, marca: string, modelo: string, fecha_modelo: Date, fecha_venta: Date, precio: number, estado: EstadoCoche){
		this.foto = foto;
		this.marca = marca;
		this.modelo = modelo;
		this.fecha_modelo = fecha_modelo;
		this.fecha_venta = fecha_venta;
		this.precio = precio;
		this.estado = estado;
	}
	
	/* Función para obtener el PVP del precio del coche */
	getPVP():number{
		/* Simplemente hay que multiplicar por 1.21 */
		return this.precio*1.21;
	}
}