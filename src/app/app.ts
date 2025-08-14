import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/common/navbar/navbar';
import { Button } from './components/shared/button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  handle() {
    console.log('clicou');
  }
}
