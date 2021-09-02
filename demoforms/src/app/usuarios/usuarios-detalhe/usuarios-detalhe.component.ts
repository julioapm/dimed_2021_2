import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-detalhe',
  templateUrl: './usuarios-detalhe.component.html',
  styleUrls: ['./usuarios-detalhe.component.css']
})
export class UsuariosDetalheComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

}
