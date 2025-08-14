import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/shared/button/button';
import { Router } from '@angular/router';
import { CertificadosService } from '../../services/certificados';
import { Certificado } from '../../interfaces/certificado.model';

interface DataItemCertificado {
  name: string;
  dataGeracao: string;
}

@Component({
  selector: 'app-lista-certificados',
  imports: [ItemCertificado, CommonModule, Button],
  templateUrl: './lista-certificados.html',
  styleUrl: './lista-certificados.css'
})
export class ListaCertificados implements OnInit {
  certificados: Certificado[] = []

  constructor(private router: Router, private certificadoService: CertificadosService) {}

  ngOnInit(): void {
    // Subscribing ao Observable
    this.certificadoService.certificados$.subscribe(
      certificados => this.certificados = certificados
    );
  }
  public get getDate(): string {
    return new Date().toISOString();
  }
  public verCertificado(item: Certificado) {
    this.router.navigate(['/certificados', item.id]);
  }

  public gerarCertificado() {
    this.router.navigate(['/certificado/novo']);
  }
}
