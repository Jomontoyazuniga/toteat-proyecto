import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {
  //dirección para indicarle al servicio donde esta la data en formato json
  private _url: string = "/assets/data/data.json";
 


  constructor(private http: HttpClient) {
    
   }

   //Servicio encargado de proporcionar todo los datos
   getVentas():Observable<any[]>{
     return this.http.get<any[]>(this._url);
   }
   
}
