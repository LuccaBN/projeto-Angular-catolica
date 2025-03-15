import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Necessário para Angular Material

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations()]
}).catch(err => console.error('Erro ao iniciar a aplicação:', err));
