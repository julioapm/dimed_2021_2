import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alomundo',
  templateUrl: './alomundo.component.html',
  styleUrls: ['./alomundo.component.css']
})
export class AlomundoComponent implements OnInit {
  mensagem = 'Alô Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
