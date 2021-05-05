import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuno',
  templateUrl: './cuno.component.html',
  styleUrls: ['./cuno.component.css']
})
export class CunoComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  headElements = ['CUI', 'Nombre', 'Apellido', 'Banco', 'Tipo Cuenta', 'Fecha y Hora', 'Monto', 'Tipo Operacion', 'CUI origen/destino', 'Nombre origen/destino', 'Apellido origen/destino', 'Banco origen/destino', 'Tipo cuenta origen/destino'];
  Rows: any = [];

  cui: number;
  nombre: string;
  apellido: string;

  ngOnInit(): void {
  }

  Buscar() {
    if (this.cui>0 && this.nombre!="" &&this.apellido!="") {
      this.Consulta.Consulta1(this.cui, this.nombre, this.apellido)
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
