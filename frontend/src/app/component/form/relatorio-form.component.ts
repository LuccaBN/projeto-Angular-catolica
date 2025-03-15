import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RelatorioExperiencia } from '../../models/relatorio-experiencia.model';
import { RelatorioExperienciaService } from '../../services/relatorio-experiencia.service';

@Component({
  selector: 'app-relatorio-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './relatorio-form.component.html',
  styleUrls: ['./relatorio-form.component.scss']
})
export class RelatorioFormComponent {
  relatorio: RelatorioExperiencia;

  constructor(
    private relatorioService: RelatorioExperienciaService,
    private dialogRef: MatDialogRef<RelatorioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RelatorioExperiencia | null
  ) {
    this.relatorio = data
      ? { ...data }
      : { titulo: '', descricao: '', dataCriacao: new Date().toISOString().split('T')[0], autor: '' };
  }

  salvarRelatorio(): void {
    if (this.relatorio.id) {
      this.relatorioService.atualizarRelatorio(this.relatorio.id, this.relatorio).subscribe(() => {
        this.dialogRef.close(true); // 🔄 Fecha o dialog e retorna TRUE para indicar que algo foi salvo
      });
    } else {
      this.relatorioService.criarRelatorio(this.relatorio).subscribe(() => {
        this.dialogRef.close(true); // 🔄 Fecha o dialog e retorna TRUE para indicar que algo foi salvo
      });
    }
  }

  fecharDialog(): void {
    this.dialogRef.close(false); // ❌ Retorna FALSE para indicar que nada foi salvo
  }
}
