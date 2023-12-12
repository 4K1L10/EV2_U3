import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EgresoService } from 'src/app/servicios/Egresos/egresos.service';
import { ActivatedRoute } from '@angular/router';

interface egresoData {
  egresos_usuario: any[]; 
}

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  formulario: any;
  registro_enviar = {
    descripcion: null,
    precio: null,
    id_usuario: null,
  };
  registros: any;

  constructor(
    private egreso: EgresoService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      descripcion: [''],
      precio: ['', [Validators.required]],
      id_usuario: ['']
    });
  }

  get serviceegreso() {
    return this.formulario.controls;
  }

  boton_Enviar() {
    if (this.formulario.valid) {
      this.registro_enviar.descripcion = this.serviceegreso.descripcion.value;
      this.registro_enviar.precio = this.serviceegreso.precio.value;
      this.registro_enviar.id_usuario = this.serviceegreso.id_usuario.value;

      this.egreso.crearEgreso(this.registro_enviar).subscribe(
        (response: any) => {
          if (response && response.egreso) {
            this.registros = response.egreso;
            console.log("Los datos recibidos son");
            console.log(this.registros);
      this.obtenerEgreso();
          } else {
            console.error("La respuesta del servicio no contiene un egreso válido.");
          }
        },
        error => {
          console.error("Error al crear egreso:", error);
        }
      );
    } else {
      console.log("El formulario no es válido.");
    }
  }

  obtenerEgreso() {
    this.egreso.obtenerEgresos().subscribe(
      (response: any) => {
        this.registros = response.egresos;
        console.log(this.registros);
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
  

  obtenerEgresosPorUsuario() {
    const idUsuario = this.route.snapshot.paramMap.get('id');
  
    if (idUsuario) {
      this.egreso.obtenerEgresosPorUsuario(idUsuario).subscribe(
        (data: egresoData) => { 
          this.registros = data.egresos_usuario;
        },
        (error) => {
          console.error('Error al obtener egresos del usuario', error);
        }
      );
    } else {
      console.error('ID de usuario no encontrado en la ruta.');
    }
  }
  obtenerTodosEgresos() {
    this.egreso.obtenerTodosEgresos().subscribe(
      (response: any) => {
        console.log("Egresos Registrados:", response);
      },
      (error) => {
        console.error("Error al obtener egresos:", error);
      }
    );
  }
}