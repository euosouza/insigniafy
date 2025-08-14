
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/common/navbar/navbar';
import { CertificadosService } from './services/certificados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private certificadosService: CertificadosService) {
    this.certificadosService.getLocalStorage();
  }
}
