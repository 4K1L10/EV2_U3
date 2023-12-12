import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/Usuario/usuario.service'; // Asegúrate de importar el servicio correctamente

@Component({
  selector: 'app-tu-componente',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  UsuarioObtener: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerRegistros();
  }

  obtenerRegistros() {
    this.usuarioService.obtener_registros().subscribe(
      (response: any) => {
        this.UsuarioObtener = response.usuarios;
        console.log(this.UsuarioObtener)
      },
      (error: any) => {
        console.error("Error al obtener Usuarios:", error);
      }
    );
  }

  eliminar(id: any) {
    console.log(id);
  }

  recargarRegistros() {
    this.obtenerRegistros();
  }
}
