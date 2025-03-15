import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RelatorioFormComponent } from './component/form/relatorio-form.component';
import { RelatorioListaComponent } from './component/lista/relatorio-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RelatorioListaComponent, RelatorioFormComponent, MatTabsModule], // ✅ Certifique-se de que tudo é um componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  relatorioSelecionado: any = null;

  selecionarRelatorio(relatorio: any) {
    this.relatorioSelecionado = { ...relatorio };
  }

  salvarRelatorio() {
    this.relatorioSelecionado = null;
  }
}
