import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-institucion',
  templateUrl: './registro-institucion.component.html',
  styleUrls: ['./registro-institucion.component.css']
})
export class RegistroInstitucionComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  institucion_bancaria: string;
  abreviacion: string;

  ngOnInit(): void {
  }

  Registrar() {
    this.Consulta.RegistrarInstitucion(this.institucion_bancaria, this.abreviacion)
      .subscribe(
        res => {
          alert("Institución Registrada Exitosamente!")
        },
        err => {
          alert("No se pudo registrar al cuentahabiente exitosamente")
          console.log(err)
        }
      )

  }

}
