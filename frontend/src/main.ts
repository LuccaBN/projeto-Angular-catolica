import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Certifique-se de que está importado corretamente

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations()] // ✅ Correto
}).catch(err => console.error('Erro ao iniciar a aplicação:', err));
