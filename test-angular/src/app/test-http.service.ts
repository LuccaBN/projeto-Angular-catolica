import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService {
  private http = inject(HttpClient); // 🚀 Injeção direta

  constructor() {
    console.log('TestHttpService carregado com HttpClient:', this.http);
  }
}
