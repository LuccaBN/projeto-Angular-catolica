import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'quadro-contato',
  imports: [ MatButtonModule, MatIconModule],
  templateUrl: './quadro-contato.component.html',
  styleUrls: ['./quadro-contato.component.scss']
})
export class QuadroContatoComponent {
  telefone: string = '71996801901'; // Número do WhatsApp
  mensagem: string = 'Olá! Gostaria de saber sua opinião sobre meu projeto. De 0 a 10, qual nota você daria?';

  abrirWhatsApp() {
    const url = `https://wa.me/${this.telefone}?text=${encodeURIComponent(this.mensagem)}`;
    window.open(url, '_blank'); // Abre em uma nova aba
  }
}
