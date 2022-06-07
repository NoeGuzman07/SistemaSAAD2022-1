import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesListComponent } from './animales-list.component';

describe('AnimalesListComponent', () => {
  let component: AnimalesListComponent;
  let fixture: ComponentFixture<AnimalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
