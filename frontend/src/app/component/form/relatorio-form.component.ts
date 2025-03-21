import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RelatorioExperiencia } from '../../models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from '../../services/relatorio-experiencia.service';

@Component({
  selector: 'app-relatorio-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-form.component.html',
  styleUrls: ['./relatorio-form.component.scss']
})
export class RelatorioFormComponent implements OnInit {
  @Input() relatorio: RelatorioExperiencia | null = null;
  @Output() salvar = new EventEmitter<void>();

  constructor(private relatorioService: RelatorioExperienciaService) {}

  ngOnInit(): void {
    if (!this.relatorio) {
      this.relatorio = {
        titulo: '',
        descricao: '',
        dataCriacao: new Date().toISOString().split('T')[0],
        autor: ''
      };
    }
  }

  salvarRelatorio(): void {
    if (this.relatorio!.id) {
      // Se o relatório já tem um ID, significa que estamos editando
      this.relatorioService.atualizarRelatorio(this.relatorio!.id, this.relatorio!).subscribe(() => {
        alert('Relatório atualizado com sucesso!');
        this.salvar.emit();
        this.limparFormulario();
      });
    } else {
      // Se não tem ID, estamos criando um novo relatório
      this.relatorioService.criarRelatorio(this.relatorio!).subscribe(() => {
        alert('Relatório criado com sucesso!');
        this.salvar.emit();
        this.limparFormulario();
      });
    }
  }

  limparFormulario(): void {
    this.relatorio = {
      titulo: '',
      descricao: '',
      dataCriacao: new Date().toISOString().split('T')[0],
      autor: ''
    };
  }
}
