import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { EgresosComponent } from './componentes/egresos/egresos.component';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './componentes/ver-egresos/ver-egresos.component';
import { EgresosUsuarioComponent } from './componentes/egresos-usuario/egresos-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EgresosComponent,
    VerUsuariosComponent,
    VerEgresosComponent,
    EgresosUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
