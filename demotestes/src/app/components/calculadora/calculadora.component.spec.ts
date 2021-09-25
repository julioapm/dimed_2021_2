import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../../services/calculadora.service';

describe('CalculadoraComponent (class)', () => {
  let component: CalculadoraComponent;
  let calculadoraServiceSpy: jasmine.SpyObj<CalculadoraService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculadoraService', ['somar']);
    TestBed.configureTestingModule({
      providers: [
        CalculadoraComponent,
        { provide: CalculadoraService, useValue: spy }
      ]
    });
    component = TestBed.inject(CalculadoraComponent);
    calculadoraServiceSpy = TestBed.inject(CalculadoraService) as jasmine.SpyObj<CalculadoraService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have value1, value2 and result zeroed', () => {
    expect(component.value1).toBe(0);
    expect(component.value2).toBe(0);
    expect(component.result).toBe(0);
  });
});

describe('CalculadoraComponent (class plus view)', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
