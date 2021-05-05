import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctres',
  templateUrl: './ctres.component.html',
  styleUrls: ['./ctres.component.css']
})
export class CtresComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  headElements = ['CUI', 'Nombre', 'Apellido', 'Email', 'Genero', 'Banco', 'Abreviación', 'Tipo Cuenta', 'Fecha de Registro', 'Saldo Inicial'];
  Rows: any = [];

  ngOnInit(): void {
    this.Buscar()
  }

  Buscar() {
    this.Consulta.Consulta3()
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
