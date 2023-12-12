import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosComponent } from './componentes/egresos/egresos.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { VerUsuariosComponent } from './componentes/ver-usuarios/ver-usuarios.component';
import { VerEgresosComponent } from './componentes/ver-egresos/ver-egresos.component';
import { EgresosUsuarioComponent } from './componentes/egresos-usuario/egresos-usuario.component';

const routes: Routes = [

  { path: 'usuario/crear-usuario', 
  component: UsuarioComponent 
  },

    { path: 'usuario/obtener-usuarios', 
    component: VerUsuariosComponent },

  { path: 'egreso/crear-egreso', 
  component: EgresosComponent 
  },

  { path: 'egreso/obtener-egresos', 
  component: VerEgresosComponent 
  },
  { path: 'egreso/obtener-egresos-usuario/:id', 
  component: EgresosUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
