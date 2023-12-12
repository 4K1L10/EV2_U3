import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url_backend = environment.url_backend+'/usuario';
  private UsuarioObtener = new BehaviorSubject<any[]>([]);
  constructor(private http:HttpClient) { }

crear_usuario(usuario:any){
    console.log(usuario);
  return  this.http.post(`${this.url_backend+`/crear-usuario`}`,usuario)

} 
obtener_registros(){
  return this.http.get(`${this.url_backend+'/obtener-usuarios'}`)
}
obtenerUsuarioObtener() {
  return this.UsuarioObtener;
}
obtenerTodosUsuarios(): Observable<any> {
  return this.http.get(`${this.url_backend+'/obtener-usuarios'}`);
}

}