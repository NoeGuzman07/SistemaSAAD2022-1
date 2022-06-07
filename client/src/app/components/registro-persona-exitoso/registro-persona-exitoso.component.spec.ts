import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPersonaExitosoComponent } from './registro-persona-exitoso.component';

describe('RegistroPersonaExitosoComponent', () => {
  let component: RegistroPersonaExitosoComponent;
  let fixture: ComponentFixture<RegistroPersonaExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPersonaExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPersonaExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
