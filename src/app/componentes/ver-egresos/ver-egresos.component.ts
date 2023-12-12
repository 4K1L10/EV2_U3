import { Component, OnInit } from '@angular/core';
import { EgresoService } from 'src/app/servicios/Egresos/egresos.service';

@Component({
  selector: 'app-ver-egresos',
  templateUrl: './ver-egresos.component.html',
  styleUrls: ['./ver-egresos.component.css']
})
export class VerEgresosComponent implements OnInit {
  egresos: any[] = [];

  constructor(private egreso: EgresoService) {}

  ngOnInit(): void {
    this.obtenerEgreso();
  }

  obtenerEgreso(): void {
    this.egreso.obtenerEgresos().subscribe(
      (response: any) => {
        this.egresos = response.egresos;
      },
      (error:any) => {
        console.error("Error al obtener egresos:", error);
      }
    );
  }

  eliminar(id: any) {
    console.log(id);
    this.egreso.eliminarEgreso(id).subscribe(
      () => {
        console.log('Egreso eliminado exitosamente.');
        this.obtenerEgreso();
      },
      (error) => {
        console.error('Error al eliminar egreso:', error);
      }
    );
  }
}
