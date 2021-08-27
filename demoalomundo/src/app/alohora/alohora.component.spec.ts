import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlohoraComponent } from './alohora.component';

describe('AlohoraComponent', () => {
  let component: AlohoraComponent;
  let fixture: ComponentFixture<AlohoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlohoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlohoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
