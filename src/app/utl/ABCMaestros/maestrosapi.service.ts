
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaestrosUTL } from './maestrosUTL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MaestrosapiService {

  constructor(private http: HttpClient) {}

  public getMaestros(): Observable<MaestrosUTL[]> {
    return this.http.get<MaestrosUTL[]>(
      'http://127.0.0.1:5000/api/maestros/'
    );
  }

  agregarNuevoMaestro(datos: MaestrosUTL) {
    return this.http.post(
      'http://127.0.0.1:5000/api/maestros/',
      datos
    );
  }

  public getMaestro(mat:string):Observable<any>{console.log("matricula"+ mat)
    return this.http.get<any>(
      `http://127.0.0.1:5000/maestros/${mat}`
    );
  }

  modificarMaestro(mat:number,datos:MaestrosUTL){
    return this.http.put(
      'http://127.0.0.1:5000/maestros/'+mat,datos
    );
  }
 
  public EliminaMaestro(mat:number):Observable<MaestrosUTL>{
    return this.http.delete<MaestrosUTL>(
      'http://127.0.0.1:5000/maestros/'+mat
    );
  }

}
