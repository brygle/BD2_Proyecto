import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CunoComponent } from './cuno.component';

describe('CunoComponent', () => {
  let component: CunoComponent;
  let fixture: ComponentFixture<CunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
