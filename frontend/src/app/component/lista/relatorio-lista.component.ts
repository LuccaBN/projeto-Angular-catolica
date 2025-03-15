import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RelatorioExperiencia } from '../../models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from '../../services/relatorio-experiencia.service';

@Component({
  selector: 'app-relatorio-lista',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, MatCardModule], // ✅ Material correto
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.scss']
})
export class RelatorioListaComponent implements OnInit {
  relatorios: RelatorioExperiencia[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'acoes'];

  @Output() editarRelatorio = new EventEmitter<RelatorioExperiencia>();

  constructor(private relatorioService: RelatorioExperienciaService) {}

  ngOnInit(): void {
    this.carregarRelatorios();
  }

  carregarRelatorios(): void {
    this.relatorioService.listarRelatorios().subscribe((data) => {
      this.relatorios = data;
    });
  }

  editar(relatorio: RelatorioExperiencia): void {
    this.editarRelatorio.emit(relatorio);
  }

  deletarRelatorio(id: number): void {
    if (confirm('Tem certeza que deseja excluir este relatório?')) {
      this.relatorioService.deletarRelatorio(id).subscribe(() => {
        this.carregarRelatorios();
      });
    }
  }
}
