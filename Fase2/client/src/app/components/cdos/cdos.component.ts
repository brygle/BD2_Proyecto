import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cdos',
  templateUrl: './cdos.component.html',
  styleUrls: ['./cdos.component.css']
})
export class CdosComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  headElements = ['Institucion', 'Total Débito', 'Total Crédito'];
  Rows: any = [];

  institucion: string;
  ins: string="";
  debito: number=0;
  credito:number=0;

  ngOnInit(): void {
  }

  async Buscar() {
    if (this.institucion != "") {
      await this.Consulta.Consulta21(this.institucion)
        .subscribe(
          res => {
            this.Rows = res;
            this.ins = this.Rows[0].institucion
            this.debito = this.Rows[0].total_debito
          },
          err => {
            console.log(err)
          }
        )
      await this.Consulta.Consulta22(this.institucion)
        .subscribe(
          res => {
            this.Rows = res;
            this.credito = this.Rows[0].total_credito
          },
          err => {
            console.log(err)
          }
        )
    }
  }
}
