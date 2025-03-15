import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'quadro-cabecalho',
  imports: [MatToolbarModule, MatCardModule],
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class QuadroCabecalhoComponent {
  titulo: string = 'Olá, eu sou Lucca B Nygaard!';
  resumo: string = 'Desenvolvedor Frontend apaixonado por Angular e tecnologias web. Criando interfaces dinâmicas e interativas.';
}
