import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptarFormComponent } from './adoptar-form.component';

describe('AdoptarFormComponent', () => {
  let component: AdoptarFormComponent;
  let fixture: ComponentFixture<AdoptarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptarFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
