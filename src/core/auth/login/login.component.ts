import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService, Usuario } from '../../../app/services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  erroLogin = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { email, senha } = this.loginForm.value;

    this.usuarioService.getUsuarios().subscribe((usuarios: Usuario[]) => {
      const usuario = usuarios.find(
        (u) => u.email === email && u.senha === senha
      );

      if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.router.navigate(['/dashboard']);
      } else {
        this.erroLogin = true;
      }
    });
  }
}
