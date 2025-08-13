import { Component } from '@angular/core';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/shared/button/button';

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
export class ListaCertificados {
  dataSource: Array<DataItemCertificado> = [
    {
      name: 'Victor Souza',
      dataGeracao: '2024-06-20T15:30:00Z'
    },
    {
      name: 'Maria Silva',
      dataGeracao: '2024-05-15T10:00:00Z'
    },
    {
      name: 'João Pereira',
      dataGeracao: '2024-04-10T08:45:00Z'
    }
  ]
  public get getDate(): string {
    return new Date().toISOString();
  }
  public verCertificado() {
    console.log('Ver certificado');
  }
}
