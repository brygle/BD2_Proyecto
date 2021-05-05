import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcincoComponent } from './ccinco.component';

describe('CcincoComponent', () => {
  let component: CcincoComponent;
  let fixture: ComponentFixture<CcincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
