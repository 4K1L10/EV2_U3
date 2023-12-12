import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/Usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario: any;
  usuario: any;
  registro_enviar = {
    nombre: '',
    apellido: '',
    rut: null,
    correo:'',
    password: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(4)]],
      Apellido: ['', [Validators.required, Validators.minLength(4)]],
      Rut: ['', [Validators.required]],
      Correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]], 
    });
    
  }

  get FormularioReactivo() {
    return this.formulario.controls;
  }

  botonEnviar() {
    if (this.formulario.valid) {
      this.registro_enviar.nombre = this.FormularioReactivo.Nombre.value;
      this.registro_enviar.apellido = this.FormularioReactivo.Apellido.value;
      this.registro_enviar.rut = this.FormularioReactivo.Rut.value;
      this.registro_enviar.correo = this.FormularioReactivo.Correo.value;
      this.registro_enviar.password = this.FormularioReactivo.password.value;
      console.log("Registrando a ", this.registro_enviar);

      this.usuarioService.crear_usuario(this.registro_enviar).subscribe(
        (response: any) => {
          this.usuario = response.usuario;
          console.log(this.usuario);
        },
        error => {
          console.error("Error al crear usuario:", error);
        }
      );
    }
  }
  obtenerTodosUsuarios() {
    this.usuarioService.obtenerTodosUsuarios().subscribe(
      (response: any) => {
        console.log("Usuarios Registrados:", response);
      },
      (error) => {
        console.error("Error al obtener usuarios:", error);
      }
    );
  }

}