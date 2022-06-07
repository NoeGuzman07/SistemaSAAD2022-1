import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAdoptarComponent } from './error-adoptar.component';

describe('ErrorAdoptarComponent', () => {
  let component: ErrorAdoptarComponent;
  let fixture: ComponentFixture<ErrorAdoptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAdoptarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAdoptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
