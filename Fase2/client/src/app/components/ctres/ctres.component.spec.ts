import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtresComponent } from './ctres.component';

describe('CtresComponent', () => {
  let component: CtresComponent;
  let fixture: ComponentFixture<CtresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
