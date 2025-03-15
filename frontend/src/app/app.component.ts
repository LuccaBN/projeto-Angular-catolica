import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RelatorioExperiencia } from './models/relatorio-experiencia.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RelatorioFormComponent } from './component/form/relatorio-form.component';
import { RelatorioListaComponent } from './component/lista/relatorio-lista.component';
import { QuadroCabecalhoComponent } from "./component/cabecalho/cabecalho.component";
import { QuadroContatoComponent } from "./component/quadro-contato/quadro-contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RelatorioListaComponent,
    QuadroCabecalhoComponent,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    QuadroCabecalhoComponent,
    QuadroContatoComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RelatorioListaComponent) listaComponent!: RelatorioListaComponent;

  constructor(
    private dialog: MatDialog
  ) {}

  abrirFormulario(relatorio?: RelatorioExperiencia): void {
    const dialogRef = this.dialog.open(RelatorioFormComponent, {
      width: '500px',
      data: relatorio ? { ...relatorio } : null
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.listaComponent.carregarRelatorios(); // 🔄 Atualiza a lista
      }
    });
  }
}
