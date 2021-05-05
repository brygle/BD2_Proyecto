import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccinco',
  templateUrl: './ccinco.component.html',
  styleUrls: ['./ccinco.component.css']
})
export class CcincoComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  headElements = ['CUI', 'Nombre', 'Apellido', 'Banco', 'Tipo Cuenta', 'Fecha y Hora', 'Monto', 'Tipo Operacion', 'CUI origen/destino', 'Nombre origen/destino', 'Apellido origen/destino', 'Banco origen/destino', 'Tipo cuenta origen/destino'];
  Rows: any = [];

  cui: number;
  nombre: string;
  apellido: string;
  mes:number;
  anio: number;


  ngOnInit(): void {
  }

  Buscar() {
    if (this.cui>0 && this.nombre!="" &&this.apellido!="" && this.mes > 0 && this.anio > 0) {
      this.Consulta.Consulta5(this.cui, this.nombre, this.apellido, this.mes, this.anio)
        .subscribe(
          res => {
            this.Rows = res;
          },
          err => {
            console.log(err)
          }
        )
    }
  }

}
