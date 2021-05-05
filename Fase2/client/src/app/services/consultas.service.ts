import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

const baseUrl = 'http://18.223.33.2:3000';

@Injectable({
    providedIn: 'root'
})
export class ConsultasService {

    constructor(private http: HttpClient) { }

    headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" })

    Consulta1(cui: number, nombre: string, apellido: string) {
        alert("entro")
        const url = baseUrl + "/consulta1";
        return this.http.post(
            url,
            {
                "cui": cui,
                "nombre": nombre,
                "apellido": apellido
            },
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }

    Consulta21(institucion: string) {
        const url = baseUrl + "/consulta21";
        return this.http.post(
            url,
            {
                "institucion": institucion
            },
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }

    Consulta22(institucion: string) {
        const url = baseUrl + "/consulta22";
        return this.http.post(
            url,
            {
                "institucion": institucion
            },
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }

    Consulta3() {
        const url = baseUrl + "/consulta3";
        return this.http.post(
            url,
            {},
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }

    Consulta4() {
        const url = baseUrl + "/consulta4";
        return this.http.post(
            url,
            {},
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }

    Consulta5(cui: number, nombre: string, apellido: string, mes: number, anio: number) {
        const url = baseUrl + "/consulta5";
        return this.http.post(
            url,
            {
                "cui": cui,
                "nombre": nombre,
                "apellido": apellido,
                "mes": mes,
                "anio": anio
            },
            {
                headers: this.headers
            }
        ).pipe(map(data => data));
    }
    
}
