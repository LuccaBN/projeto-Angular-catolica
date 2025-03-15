import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioExperiencia } from '../../models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from '../../services/relatorio-experiencia.service';

@Component({
  selector: 'app-relatorio-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-lista.component.html',
  styleUrls: ['./relatorio-lista.component.scss']
})
export class RelatorioListaComponent implements OnInit {
  relatorios: RelatorioExperiencia[] = [];

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
