import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcuatroComponent } from './ccuatro.component';

describe('CcuatroComponent', () => {
  let component: CcuatroComponent;
  let fixture: ComponentFixture<CcuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
