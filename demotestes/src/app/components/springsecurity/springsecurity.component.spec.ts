import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringsecurityComponent } from './springsecurity.component';

describe('SpringsecurityComponent', () => {
  let component: SpringsecurityComponent;
  let fixture: ComponentFixture<SpringsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringsecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
