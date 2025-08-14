import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadosService } from '../../services/certificados';
import { Certificado } from '../../interfaces/certificado.model';
import { Button } from '../../components/shared/button/button';

@Component({
  selector: 'app-certificado',
  imports: [Button, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadoPage {
  certificado: Certificado | undefined = undefined;

  constructor(private routerActivatedRoute: ActivatedRoute, private certificadoService: CertificadosService) { }

  public get id(): string {
    return this.routerActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.certificado = this.certificadoService.getCertificadoById(this.id);
  }

  public get formataAtividades() {
    return this.certificado?.atividades.join(", ")
  }

  public get formataDataGeracao() {
    const data = this.certificado?.dataGeracao ?? new Date();

    return new Date(data).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
}
