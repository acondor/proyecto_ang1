import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'contacto',
	templateUrl: './contacto.component.html'

})

export class ContactoComponent{
	public titulo="pagina de contacto de la web";
	public parametro;

	//para utilizarlo los router importado tendria ueinyectar a mi clase
	constructor(
		private _route:ActivatedRoute,
		private _router:Router
		){}

	ngOnInit(){
		this._route.params.forEach((params:Params)=>{
		this.parametro=params['page'];
		});
	}
} 