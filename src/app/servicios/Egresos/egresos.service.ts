import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  url_backend = environment.url_backend+'/egreso';
  private egresosSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  crearEgreso(egresoData: any): Observable<any> {
    return this.http.post(`${this.url_backend}/crear-egreso`, egresoData);
  }

  obtenerEgresos(): Observable<any> {
    this.http.get(`${this.url_backend}/obtener-egresos`).subscribe(
      (response: any) => {
        this.egresosSubject.next(response.egresos);
      },
      error => {
        console.error("Error al obtener egresos:", error);
      }
    );
    return this.egresosSubject.asObservable();
  }

  eliminarEgreso(id: string): Observable<any> {
    const url = `${this.url_backend}/egreso/eliminar/${id}`;
    return this.http.delete(url);
  }

  obtenerEgresosPorUsuario(id: string): Observable<any> {
    const url = `${this.url_backend}/obtener-egresos-usuario/${id}`;
    return this.http.get(url);
  }
}
