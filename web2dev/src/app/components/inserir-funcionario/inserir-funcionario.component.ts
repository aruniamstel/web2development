import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Funcionario } from '../../shared/models/funcionario.model';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './inserir-funcionario.component.html',
  styleUrl: './inserir-funcionario.component.css'
})
export class InserirFuncionarioComponent {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario: Funcionario = new Funcionario();
  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router) { }
  inserir(): void {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.inserir(this.funcionario);
      this.router.navigate(["/funcionarios/listar"]);
    }
  }
}
