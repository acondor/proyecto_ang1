export class Empleado {
	 
	// public nombre:string;
	// public edad:number;

	// constructor(nombre,edad) {
	// 	this.nombre= nombre;
	// 	this.edad=edad;
	// }
	//Esto es reemplazado por solo por el constructor siguiente
	constructor(
		public nombre:string,
		public edad:number,
		public cargo:string,
		public contratado:boolean
		){}
}