import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl:'./fruta.component.html'
})
export class FrutaComponent{
	public nombre_component='Componente de fruta';
	public listado_frutas='Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<any>= ['Carpintero',4,'Fontanero'];
	comodin:any;

	constructor(){
		this.nombre='Alberto C';
		this.edad=38;
		this.mayorDeEdad=false;
		this.comodin='SI';
		// this.holamundo(this.nombre);
		// this.cambiarNombre();
		// this.cambiarEdad(45);
		// alert(this.nombre + " "+ this.edad);

	}
	// es mala practica llamar a un metodo dentro del constructor para
	//eso existe ngOnInit (es lo primero que se carga despues del constructor)
	// let: actua a nivel de bloque de codigo funcion, if y etc
	// var: tiene alcance global
	// interpolacion {{}}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad(45);
		console.log(this.nombre + " "+ this.edad);

		//variables y alcance la diferencia entre let y var es el alance

		var uno = 8;
		var dos = 15;

		if (uno==8) {
			let uno=3;
			var dos=88;
			console.log('dentro del IF '+ uno + " " + dos);
		}
		console.log('fuera del IF '+  " " + dos);
	}


	holamundo(nombre){
		this.nombre= 'Julio';
		alert('Hola Mundo ' + nombre);
	}

	cambiarNombre(){
		this.nombre= 'Julio';
		
	}
	cambiarEdad(edad){
		this.edad=edad;
	}

}