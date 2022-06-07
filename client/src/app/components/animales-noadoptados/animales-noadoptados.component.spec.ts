import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesNoadoptadosComponent } from './animales-noadoptados.component';

describe('AnimalesNoadoptadosComponent', () => {
  let component: AnimalesNoadoptadosComponent;
  let fixture: ComponentFixture<AnimalesNoadoptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesNoadoptadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesNoadoptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
