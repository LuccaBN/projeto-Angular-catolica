import { Component, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RelatorioExperiencia } from './models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from './services/relatorio-experiencia.service';
import { RelatorioFormComponent } from './component/form/relatorio-form.component';
import { RelatorioListaComponent } from './component/lista/relatorio-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RelatorioListaComponent, RelatorioFormComponent, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RelatorioListaComponent) listaComponent!: RelatorioListaComponent;
  relatorioSelecionado: RelatorioExperiencia | null = null;
  abaAtiva = 0; // Aba ativa no Material Tabs

  constructor(private relatorioService: RelatorioExperienciaService) {}

  selecionarRelatorio(id: number) {
    this.relatorioService.obterRelatorioPorId(id).subscribe((relatorio) => {
      this.relatorioSelecionado = relatorio; // Preenche o formulário com os dados recebidos
      this.abaAtiva = 1; // Muda para a aba do formulário
    });
  }

  atualizarLista() {
    this.listaComponent.carregarRelatorios(); // Atualiza a lista automaticamente
    this.relatorioSelecionado = null; // Reseta a seleção
    this.abaAtiva = 0; // Volta para a aba da lista
  }
}
