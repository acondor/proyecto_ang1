import { Component } from '@angular/core';
import { Empleado } from './empleado';// con import se puede
//importar cualquier clase o fichero que hayamos creado.
  
@Component({
	selector:'empleado-tag',
	templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
	public titulo='componente Empleados';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado= new Empleado('David Lopez',45,'Cocinero',true);
		this.trabajadores=[
			new Empleado('Manolo Martinez',55,'Administrativo',false),
			new Empleado('Ana Lopez',25,'Inge.',false),
			new Empleado('Victor',35,'Medico',true)
		];
		this.trabajador_externo=false;
		this.color='green';
		this.color_seleccionado='#ccc';
	}
	ngOnInit(){
		
		console.log(this.empleado); 
		console.log(this.trabajadores);
	}
	cambiarExterno(valor){
		this.trabajador_externo=valor;
	}
	logColorSleccionado(){
		console.log(this.color_seleccionado);
	}
}
