import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//para trabajar con formularios
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
