import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {
  dadosUsuarioForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    job: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const dadosUsuario = this.dadosUsuarioForm.value;
    console.log(dadosUsuario);
    this.router.navigate(['/usuarios']);
  }
}
