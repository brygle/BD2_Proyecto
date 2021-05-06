import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cuentahabiente',
  templateUrl: './registro-cuentahabiente.component.html',
  styleUrls: ['./registro-cuentahabiente.component.css']
})
export class RegistroCuentahabienteComponent implements OnInit {

  constructor(public router: Router, public Consulta: ConsultasService) { }

  cui: number;
  nombre: string;
  apellido: string;
  email: string;
  genero: string;
  saldo: number;

  institucion: string;
  abreviacion: string;

  fecha_registro: string;
  tipo: string;

  ngOnInit(): void {
  }

  Registrar() {
    var today = new Date();
    var mes = "";
    var dia = "";
    if (today.getMonth() + 1 < 10) {
      mes = "0"
    }
    if (today.getDay() < 10) {
      dia = "0"
    }
    mes += (today.getMonth() + 1);
    dia += today.getDate();
    this.fecha_registro = today.getFullYear() + '-' + mes + '-' + dia;

    this.Consulta.RegistrarCuentahabiente(this.cui, this.nombre, this.apellido, this.email, this.genero, this.saldo, this.institucion, this.abreviacion, this.fecha_registro, this.tipo)
      .subscribe(
        res => {
          alert("Cuentahabiente Registrado Exitosamente!")
        },
        err => {
          alert("No se pudo registrar al cuentahabiente exitosamente")
          console.log(err)
        }
      )

  }

}
