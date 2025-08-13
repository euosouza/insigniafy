import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-item-certificado',
  imports: [Button],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() name: string = "";
  @Input() dataGeracao: string = "";

  @Output() onClick = new EventEmitter<void>();
  constructor() {}

  handleClick() {
    this.onClick.emit();
  }

  public get handleDate() {
    return new Date(this.dataGeracao).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
}
