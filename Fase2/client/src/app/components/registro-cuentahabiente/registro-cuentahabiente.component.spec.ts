import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCuentahabienteComponent } from './registro-cuentahabiente.component';

describe('RegistroCuentahabienteComponent', () => {
  let component: RegistroCuentahabienteComponent;
  let fixture: ComponentFixture<RegistroCuentahabienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCuentahabienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCuentahabienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
