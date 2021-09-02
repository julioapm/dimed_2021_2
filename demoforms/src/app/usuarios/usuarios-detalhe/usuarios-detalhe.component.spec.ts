import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetalheComponent } from './usuarios-detalhe.component';

describe('UsuariosDetalheComponent', () => {
  let component: UsuariosDetalheComponent;
  let fixture: ComponentFixture<UsuariosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
