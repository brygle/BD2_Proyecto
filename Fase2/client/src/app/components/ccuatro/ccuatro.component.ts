import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccuatro',
  templateUrl: './ccuatro.component.html',
  styleUrls: ['./ccuatro.component.css']
})
export class CcuatroComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  headElements = ['Institución Bancaria', 'Abreviación'];
  Rows: any = [];

  ngOnInit(): void {
    this.Buscar()
  }

  Buscar() {
    this.Consulta.Consulta4()
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
