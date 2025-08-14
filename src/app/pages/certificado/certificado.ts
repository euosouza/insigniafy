import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificadosService } from '../../services/certificados';
import { Certificado } from '../../interfaces/certificado.model';

@Component({
  selector: 'app-certificado',
  imports: [],
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
    console.log("Certificado: ", this.certificado);
  }
}
