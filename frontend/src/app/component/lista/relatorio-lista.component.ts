import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RelatorioExperiencia } from '../../models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from '../../services/relatorio-experiencia.service';

@Component({
  selector: 'app-relatorio-lista',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.scss'],
})
export class RelatorioListaComponent implements OnInit {
  relatorios: RelatorioExperiencia[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'acoes'];

  @Output() editarRelatorio = new EventEmitter<number>(); // Agora passa apenas o ID

  constructor(private relatorioService: RelatorioExperienciaService) {}

  ngOnInit(): void {
    this.carregarRelatorios();
  }

  carregarRelatorios(): void {
    this.relatorioService.listarRelatorios().subscribe((data) => {
      this.relatorios = data;
    });
  }

  editar(id: number): void {
    this.editarRelatorio.emit(id);
  }

  deletarRelatorio(id: number): void {
    this.relatorioService.deletarRelatorio(id).subscribe(() => {
      this.carregarRelatorios();
    });
  }
}
