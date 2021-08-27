import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlomundoComponent } from './alomundo.component';

describe('AlomundoComponent', () => {
  let component: AlomundoComponent;
  let fixture: ComponentFixture<AlomundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlomundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlomundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
