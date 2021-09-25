import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  constructor(private service: CalculadoraService) { }

  ngOnInit(): void {
  }

  sum() {
    this.result = this.service.somar(this.value1, this.value2);
  }

}
