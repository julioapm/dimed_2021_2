import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alohora',
  templateUrl: './alohora.component.html',
  styleUrls: ['./alohora.component.css']
})
export class AlohoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  horaAtual() {
    return new Date();
  }

  digaAlo() {
    alert('Alô');
  }
}
