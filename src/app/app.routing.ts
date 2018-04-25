import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';


// definir variable constante
const appRoutes:Routes=[
	//ruta inicial cuando no tenga nada, en path nos carga el comp. empleado
	{path:'',component:HomeComponent},
	
	{path:'empleado',component:EmpleadoComponent},
	{path:'fruta',component:FrutaComponent},
	{path:'home',component:HomeComponent},
	{path:'contacto',component:ContactoComponent},
	{path:'contacto/:page',component:ContactoComponent},
	//pagina cuando sale error 404
	{path:'**',component:HomeComponent}	
];

export const appRoutingProviders:any[]=[];

//inyecta todas las rutas indicadas al framework
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);