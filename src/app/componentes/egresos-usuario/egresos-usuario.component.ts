import { Component, OnInit } from '@angular/core';
import { EgresoService } from 'src/app/servicios/Egresos/egresos.service';

@Component({
  selector: 'app-egresos-usuario',
  templateUrl: './egresos-usuario.component.html',
  styleUrls: ['./egresos-usuario.component.css']
})
export class EgresosUsuarioComponent {
  egresosUsuario: any[] = [];
  constructor(private egresoService: EgresoService) {}


  ngOnInit() {
    const idUsuario = ''; 
    this.egresoService.obtenerEgresosPorUsuario(idUsuario).subscribe(
      (response: any) => {
        this.egresosUsuario = response.egresos_usuario;
        console.log("Los egresos del usuario son:", this.egresosUsuario);
      },
      (error) => {
        console.error("Error al obtener egresos del usuario:", error);
      }
    );
  }
  obtenerEgresosUsuario() {
    const idUsuario = '...'; 
    this.egresoService.obtenerEgresosUsuario(idUsuario).subscribe(
      (response: any) => {
        console.log("Egresos del Usuario:", response);
      },
      (error) => {
        console.error("Error al obtener egresos del usuario:", error);
      }
    );
  }
}
